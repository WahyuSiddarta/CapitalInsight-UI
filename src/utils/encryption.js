import CryptoJS from "crypto-js";

const SECRET_KEY = import.meta.env.VITE_SECRET_KEY; // Use environment variable for the secret key

// Function to encrypt data
export const encryptData = (data) => {
  return CryptoJS.AES.encrypt(data, SECRET_KEY).toString();
};

// Function to decrypt data
export const decryptData = (ciphertext) => {
  const bytes = CryptoJS.AES.decrypt(ciphertext, SECRET_KEY);
  return bytes.toString(CryptoJS.enc.Utf8);
};

// Function to get decrypted data from localStorage
export const getDecryptedLocalStorage = (key) => {
  const encryptedData = localStorage.getItem(key);
  return encryptedData ? decryptData(encryptedData) : null;
};

// Function to set encrypted data to localStorage
export const setEncryptedLocalStorage = (key, data) => {
  const encryptedData = encryptData(data);
  localStorage.setItem(key, encryptedData);
};
