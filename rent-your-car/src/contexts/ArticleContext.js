import { useNavigate } from "react-router-dom";
import { useState, useEffect, createContext, useContext } from "react";

import { carServiceFactory } from "../services/carService";
import { AuthContext } from "./AuthContext";
import { useAuthService } from "../hooks/useAuthService";
import { authServiceFactory } from "../services/authService";
import toast from "react-hot-toast";

export const ArticleContext = createContext();

export const ArticleProvider = ({ children }) => {
  const { token, userId } = useContext(AuthContext);
  const navigate = useNavigate();
  const [articles, setArticles] = useState([]);

  const carService = useAuthService(carServiceFactory); //auth.accessToken

  useEffect(() => {
    carService.getAll().then((result) => {
      setArticles(result);
    });
  }, []);

  const onCreateArticle = async (data) => {
    const newArticle = await carService.create(data);

    setArticles((state) => [...state, newArticle]);

    toast.success("Article created successfully!", {
      duration: 1000,
    });

    setTimeout(() => {
      navigate(`/catalog`);
    }, 1000);
  };

  const onEdit = async (values) => {
    const result = await carService.edit(values._id, values);

    setArticles((state) =>
      state.map((x) => (x._id === values._id ? result : x))
    );

    toast.success("Article edited successfully!", {
      duration: 1000,
    });

    setTimeout(() => {
      navigate(`/catalog/${values._id}`);
    }, 1000);
  };

  const onDelete = (id) => {
    //  carService.delete(id);

    setArticles((state) => state.filter((x) => x._id !== id));

    toast.success("Article deleted successfully!", {
      duration: 1000,
    });

    setTimeout(() => {
      navigate(`/catalog`);
    }, 1000);
  };

  const context = {
    articles,
    onCreateArticle,
    onEdit,
    onDelete,
  };

  return (
    <>
      <ArticleContext.Provider value={context}>
        {children}
      </ArticleContext.Provider>
    </>
  );
};
