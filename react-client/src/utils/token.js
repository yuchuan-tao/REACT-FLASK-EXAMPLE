// Define the key used to store the token in localStorage
const TOKENKEY = 'user_token';

/**
 * Save the token to localStorage
 * @param {string} token - The token to be saved
 */
function setToken(token) {
  return localStorage.setItem(TOKENKEY, token);
}

/**
 * Retrieve the token from localStorage
 * @returns {string|null} The retrieved token, or null if not found
 */
function getToken() {
  return localStorage.getItem(TOKENKEY);
}

/**
 * Remove the token from localStorage
 * @returns {void}
 */
function removeToken() {
  return localStorage.removeItem(TOKENKEY);
}

// Export the functions for use in other parts of the application
export {
  setToken,
  getToken,
  removeToken
};
