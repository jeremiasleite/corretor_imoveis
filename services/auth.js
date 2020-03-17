export const TOKEN_KEY = "@airbnb-Token";
export const USERNAME = "usename";
export const isAuthenticated = () => localStorage.getItem(TOKEN_KEY) !== null;
export const getToken = () => localStorage.getItem(TOKEN_KEY);
export const getUsername = () => localStorage.getItem(USERNAME);
export const login = (token,username) => {
  localStorage.setItem(TOKEN_KEY, token);
  localStorage.setItem(USERNAME, username);
};
export const logout = () => {
  localStorage.removeItem(TOKEN_KEY);
  localStorage.removeItem(USERNAME);  
};