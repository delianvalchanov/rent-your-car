import { createContext } from "react";
import { authServiceFactory } from "../services/authService";
import { useNavigate } from "react-router-dom";
import { useLocalStorage } from "../hooks/useLocalStorage";
import toast from "react-hot-toast";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [auth, setAuth] = useLocalStorage("auth", {});
  const authService = authServiceFactory(auth.accessToken);

  const onLoginSubmit = async (data) => {
    try {
      const result = await authService.login(data);
      setAuth(result);

      toast.success("Successfull login!", {
        duration: 1000,
      });
      setTimeout(() => {
        navigate("/catalog");
      }, 1000);
    } catch (error) {
      toast.error(error.message);
    }
  };

  const onRegisterSubmit = async (values) => {
    const { confirmPassword, ...registerData } = values;

    if (confirmPassword !== registerData.password) {
      toast.error("Passwords don`t match!");
      return;
    }

    try {
      const result = await authService.register(registerData);
      setAuth(result);
      toast.success("Successfull registration!", {
        duration: 1000,
      });

      setTimeout(() => {
        navigate("/catalog");
      }, 1000);
    } catch (error) {
      toast.error(error.message);
    }
  };

  const onLogout = () => {
    authService.logout();

    setAuth({});
    navigate("/");
  };

  const context = {
    onLoginSubmit,
    onRegisterSubmit,
    onLogout,
    username: auth.username,
    userId: auth._id,
    token: auth.accessToken,
    email: auth.email,
    isAuthenticated: !!auth.accessToken,
  };

  return (
    <>
      <AuthContext.Provider value={context}>{children}</AuthContext.Provider>
    </>
  );
};
