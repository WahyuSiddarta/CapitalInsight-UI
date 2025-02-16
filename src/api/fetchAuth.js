import fetchWrapper from "@/src/utils/Api";

// Function to send email and password to /api/public/login
export const login = async (email, password) => {
  try {
    const response = await fetchWrapper.postPublic("/login", {
      email,
      password,
    });
    return response;
  } catch (error) {
    console.error("Error logging in:", error);
    throw error;
  }
};

// Function to send email and password to /api/public/login
export const register = async (email, password) => {
  try {
    const response = await fetchWrapper.postPublic("/register", {
      email,
      password,
    });
    return response;
  } catch (error) {
    console.error("Error register in:", error);
    throw error;
  }
};
