export const SET_LOGGEDIN_USER = 'SET_LOGGEDIN_USER'

export function setLoggedInUser(userId) {
  return {
    type: SET_LOGGEDIN_USER,
    userId
  }
}
