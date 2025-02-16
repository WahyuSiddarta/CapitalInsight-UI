import {
  setEncryptedLocalStorage,
  getDecryptedLocalStorage,
} from "./encryption";

export const logoutUser = (navigateTo) => {
  localStorage.removeItem("isLoggedIn");
  localStorage.removeItem("refreshToken");
  if (navigateTo && window.location.pathname !== navigateTo) {
    window.location.href = navigateTo;
  } else if (window.location.pathname !== navigateTo) {
    window.location.href = "/login";
  }
};

export function isUserLoggedIn() {
  const token = getDecryptedLocalStorage("refreshToken");
  const isLoggedIn = !!token && !isTokenExpired(token);
  console.log("isUserLoggedIn:", isLoggedIn); // Add logging
  return isLoggedIn;
}

export const isTokenExpired = (token) => {
  try {
    const payload = JSON.parse(atob(token.split(".")[1]));
    return payload.exp * 1000 < Date.now();
  } catch (error) {
    console.error("Failed to parse token:", error);
    return true;
  }
};
