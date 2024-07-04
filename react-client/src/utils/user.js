const USER_EMAIL = 'user_email'

function setEmail (email) {
  return localStorage.setItem(USER_EMAIL, email)
}

function getEmail () {
  return localStorage.getItem(USER_EMAIL)
}

function removeEmail () {
  return localStorage.removeItem(USER_EMAIL)
}

export {
  setEmail,
  getEmail,
  removeEmail
}