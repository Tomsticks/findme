import  CryptoJS  from 'crypto-js';

export default defineNuxtPlugin((nuxtApp) => {
  const encryptionKey = "tomzor36363dbd7fdwbe8wegr8&$^$&"; 

  nuxtApp.provide("setLocalStorage", (key:string, value:any) => {
    if (import.meta.client) {
      try {
        // Encrypt the value
        const encryptedValue = CryptoJS.AES.encrypt(
          JSON.stringify(value),
          encryptionKey
        ).toString();
        localStorage.setItem(key, encryptedValue);
      } catch (error) {
      }
    }
  });

  nuxtApp.provide("getLocalStorage", (key:string) => {
    if (import.meta.client) {
      try {
        const encryptedValue = localStorage.getItem(key);
        if (encryptedValue) {
          // Decrypt the value
          const bytes = CryptoJS.AES.decrypt(encryptedValue, encryptionKey);
          const decryptedValue = bytes.toString(CryptoJS.enc.Utf8);
          return JSON.parse(decryptedValue); 
        }
      } catch (error) {
      }
    }
    return null;
  });

  // Remove item from localStorage
  nuxtApp.provide("removeLocalStorage", (key:string) => {
    if (import.meta.client) {
      localStorage.removeItem(key);
    }
  });
});
