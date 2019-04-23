import { createContext } from "react";

const authContext = createContext({
  authenticated: false,
  user: {},
  access_token: "",
  refresh_token: "",
  token_validity: 0,
  initiateLogin: () => {},
  handleLogin: () => {},
  logout: () => {}
});

export const AuthProvider = authContext.Provider;
export const AuthConsumer = authContext.Consumer;
