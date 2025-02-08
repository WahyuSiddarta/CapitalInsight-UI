import CryptoJS from "crypto-js";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Merges class names using clsx and tailwind-merge.
 * @param {...any} inputs - The class names to merge.
 * @returns {string} - The merged class names.
 */
export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

/**
 * Formats a date string or timestamp into a readable date format.
 * @param {string | number} input - The date string or timestamp to format.
 * @returns {string} - The formatted date string.
 */
export function formatDate(input: string | number): string {
  const date = new Date(input);
  return date.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

/**
 * Constructs an absolute URL from a given path.
 * @param {string} path - The path to append to the base URL.
 * @returns {string} - The absolute URL.
 */
export function absoluteUrl(path: string) {
  return `${process.env.NEXT_PUBLIC_APP_URL}${path}`;
}

const password = "`12";
const cryptoOptions = {
  mode: CryptoJS.mode.ECB,
  padding: CryptoJS.pad.Pkcs7,
  // iv is not used in ECB mode
};

/**
 * Encrypts a string using AES encryption.
 * @param {any} [string=""] - The string to encrypt.
 * @returns {string} - The encrypted string in hexadecimal format.
 */
export function aesEncrypt(string: any = ""): string {
  const cryptKey = CryptoJS.enc.Utf8.parse(password);
  const cipher = CryptoJS.AES.encrypt(string, cryptKey, cryptoOptions);
  return CryptoJS.enc.Hex.stringify(cipher.ciphertext);
}

/**
 * Decrypts an AES encrypted string.
 * @param {any} [string=""] - The encrypted string in hexadecimal format.
 * @returns {string} - The decrypted string.
 */
export function aesDecrypt(string: any = ""): string {
  const cryptKey = CryptoJS.enc.Utf8.parse(password);
  const cipherParams = CryptoJS.lib.CipherParams.create({
    ciphertext: CryptoJS.enc.Hex.parse(string),
  });
  const decipher = CryptoJS.AES.decrypt(cipherParams, cryptKey, cryptoOptions);
  return CryptoJS.enc.Utf8.stringify(decipher);
}
