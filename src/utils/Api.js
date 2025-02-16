import axios from "axios";
import { throttle } from "throttle-debounce";
import {
  getDecryptedLocalStorage,
  setEncryptedLocalStorage,
} from "./encryption"; // Import encryption functions
import { isTokenExpired, logoutUser } from "./auth"; // Import the new logoutUser function

const URL = import.meta.env.VITE_API_DOMAIN + "/api"; // Use Vite environment variable

// Public API instance
const publicApi = axios.create({
  // Future-proofing for HTTP/3
  // baseURL: `${URL}/public`, // Uncomment when backend supports HTTP/3
  // http3: true, // Uncomment when backend supports HTTP/3
});
const initPublicAPI = async () => {
  try {
    publicApi.defaults.baseURL = `${URL}/public`; // Make sure URL is defined
    publicApi.defaults.headers.common["Accept-Encoding"] = "gzip"; // Add support for more encodings
    // publicApi.defaults.headers.common["x-no-compression"] = "true"; // Add custom header
    publicApi.defaults.headers.common["Access-Control-Allow-Origin"] = "*"; // Add CORS header
  } catch (error) {
    console.error("Failed to initialize public API:", error);
  }
};
initPublicAPI();

// Private API instance
const privateApi = axios.create({
  // Future-proofing for HTTP/3
  // baseURL: `${URL}/private`, // Uncomment when backend supports HTTP/3
  // http3: true, // Uncomment when backend supports HTTP/3
});
export const initPrivateAPI = async (token) => {
  try {
    privateApi.defaults.headers.common.Authorization = `Bearer ${token}`;
    privateApi.defaults.baseURL = `${URL}/private`; // Ensure URL is defined
    privateApi.defaults.headers.common["Accept-Encoding"] = "gzip, deflate, br"; // Add support for more encodings
    privateApi.defaults.headers.common["Access-Control-Allow-Origin"] = "*"; // Add CORS header
  } catch (error) {
    console.error("Failed to initialize private API:", error);
  }
};

// Refresh token API instance
const refreshApi = axios.create({
  baseURL: `${URL}/public`, // Use the public base URL
  headers: {
    "Content-Type": "application/x-www-form-urlencoded",
  },
});

privateApi.interceptors.request.use(
  function (config_) {
    if (!privateApi.defaults.headers.common.Authorization) {
      return Promise.reject("Authorization header is missing");
    }
    return config_;
  },
  function (error) {
    return Promise.reject(error.message);
  }
);

const handleAxiosError = (url, method, error) => {
  // Log the error to console with additional context
  console.error(`Error in ${method} request to ${url}:`, error);

  if (axios.isAxiosError(error)) {
    // Capture specific details about the Axios error
    console.error("Axios error details:", {
      url,
      method,
      response: error?.response ?? null,
      request: error.request ?? null,
      message: error.message,
    });
  } else {
    // Handle unexpected errors
    console.error("Unexpected error:", error);
  }

  return Promise.reject(error);
};

export const refreshToken = async () => {
  try {
    const token = getDecryptedLocalStorage("refreshToken"); // Decrypt the token before use
    if (isTokenExpired(token)) {
      logoutUser("/login");
      return null;
    }
    const response = await refreshApi.post(
      "/refresh-token",
      { token },
      {
        headers: {
          Authorization: `Bearer ${token}`, // Add authorization header
        },
      }
    );
    const newToken = response.data.token;
    initPrivateAPI(newToken);
    return newToken;
  } catch (error) {
    console.error("Failed to refresh token:", error);
    logoutUser("/login");
    return null;
  }
};

const handleResponse = async (response, isPrivate = false) => {
  let data = await response?.data;
  try {
    if (!(response.status >= 200 && response.status < 300)) {
      if (isPrivate && response.status === 401) {
        const newToken = await refreshToken();
        if (newToken) {
          return Promise.reject("Token refreshed, please retry the request");
        }
      } else if (response.status === 403) {
        logoutUser("/forbidden");
        return Promise.reject(
          "Forbidden access, redirecting to forbidden page"
        );
      }

      if (!response?.headers["content-type"].includes("application/json")) {
        return Promise.reject(`Unexpected content type: ${response.status}`);
      }
      const error = data || response.statusText;
      return Promise.reject(error);
    }
  } catch (error) {
    console.error(`handleResponse : ${error}`);
    return Promise.reject("An error occurred while handling the response");
  }

  return data;
};

const throttleLogoutMe = throttle(
  1000,
  () => {
    logoutUser("/login");
  },
  { noLeading: false, noTrailing: false }
);

const postPublic = async (url, param) => {
  let data = new URLSearchParams(param);
  try {
    let response = await publicApi.post(url, data.toString(), {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded", // Set content type to application/x-www-form-urlencoded
      },
    });
    return response?.data;
  } catch (error) {
    console.log("error  postPublic ", error);
    if (error.response) {
      return handleResponse(error.response);
    } else {
      return handleAxiosError(url, "postPublic", error);
    }
  }
};

const postPrivate = async (url, param) => {
  let data = new URLSearchParams(param);
  try {
    let response = await privateApi.post(url, data.toString(), {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded", // Set content type to application/x-www-form-urlencoded
      },
    });
    return response?.data;
  } catch (error) {
    if (error.response?.status === 401) {
      const newToken = await refreshToken();
      if (newToken) {
        return postPrivate(url, param);
      }
    } else if (error.response?.status === 403) {
      logoutUser("/forbidden");
    }
    return error.response
      ? handleResponse(error.response, true)
      : handleAxiosError(url, "postPrivate", error);
  }
};

const putPrivate = async (url, param) => {
  let privateHeader = {
    "Content-Type": "multipart/form-data",
  };
  try {
    let response = await privateApi.put(url, param, {
      headers: privateHeader,
    });
    return response?.data;
  } catch (error) {
    if (error.response?.status === 401) {
      const newToken = await refreshToken();
      if (newToken) {
        return putPrivate(url, param);
      }
    } else if (error.response?.status === 403) {
      logoutUser("/forbidden");
    }
    return error.response
      ? handleResponse(error.response, true)
      : handleAxiosError(url, "putPrivate", error);
  }
};

const getPublic = async (url) => {
  try {
    let response = await publicApi.get(url);
    return response?.data;
  } catch (error) {
    return error.response
      ? handleResponse(error.response)
      : handleAxiosError(url, "getPublic", error);
  }
};

const getPrivate = async (url) => {
  try {
    let response = await privateApi.get(url);
    return response?.data;
  } catch (error) {
    if (error.response?.status === 401) {
      const newToken = await refreshToken();
      if (newToken) {
        return getPrivate(url);
      }
    } else if (error.response?.status === 403) {
      logoutUser("/forbidden");
    }
    return error.response
      ? handleResponse(error.response, true)
      : handleAxiosError(url, "getPrivate", error);
  }
};

const putPublic = async (url, param) => {
  let data = new URLSearchParams(param);
  try {
    let response = await publicApi.put(url, data?.toString());
    return response?.data;
  } catch (error) {
    return error.response
      ? handleResponse(error.response)
      : handleAxiosError(url, "putPublic", error);
  }
};

const deletePublic = async (url) => {
  try {
    let response = await publicApi.delete(url);
    return response?.data;
  } catch (error) {
    return error.response
      ? handleResponse(error.response)
      : handleAxiosError(url, "deletePublic", error);
  }
};

const deletePrivate = async (url) => {
  try {
    let response = await privateApi.delete(url);
    return response?.data;
  } catch (error) {
    if (error.response?.status === 401) {
      const newToken = await refreshToken();
      if (newToken) {
        return deletePrivate(url);
      }
    } else if (error.response?.status === 403) {
      logoutUser("/forbidden");
    }
    return error.response
      ? handleResponse(error.response, true)
      : handleAxiosError(url, "deletePrivate", error);
  }
};
const fetchWrapper = {
  getPrivate,
  getPublic,
  postPrivate,
  postPublic,
  putPrivate,
  putPublic,
  deletePrivate,
  deletePublic,
  refreshToken,
};
export default fetchWrapper;
