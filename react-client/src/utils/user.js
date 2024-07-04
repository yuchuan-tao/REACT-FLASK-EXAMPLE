// Define the key used to store the user email in localStorage
const USER_EMAIL = 'user_email';

/**
 * Save the user email to localStorage
 * @param {string} email - The email to be saved
 */
function setEmail(email) {
  return localStorage.setItem(USER_EMAIL, email);
}

/**
 * Retrieve the user email from localStorage
 * @returns {string|null} The retrieved email, or null if not found
 */
function getEmail() {
  return localStorage.getItem(USER_EMAIL);
}

/**
 * Remove the user email from localStorage
 * @returns {void}
 */
function removeEmail() {
  return localStorage.removeItem(USER_EMAIL);
}

// Export the functions for use in other parts of the application
export {
  setEmail,
  getEmail,
  removeEmail
};
