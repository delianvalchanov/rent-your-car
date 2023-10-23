import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

export const useAuthService = (serviceFactory) => {
  const { token } = useContext(AuthContext);

  const service = serviceFactory(token);
  return service;
};
