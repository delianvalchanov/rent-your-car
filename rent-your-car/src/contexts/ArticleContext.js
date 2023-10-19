import { useNavigate } from "react-router-dom";
import { useState, useEffect, createContext, useContext } from "react";

import { carServiceFactory } from "../services/carService";
import { AuthContext } from "./AuthContext";

export const ArticleContext = createContext();

export const ArticleProvider = ({ children }) => {
  const { token, userId } = useContext(AuthContext);
  const navigate = useNavigate();
  const [articles, setArticles] = useState([]);

  let article = articles.find((obj) => obj._ownerId === userId);

  const id = (id) => {
    let articleId = id;
    return articleId;
  };

  const carService = carServiceFactory(token); //auth.accessToken

  useEffect(() => {
    carService.getAll().then((result) => {
      setArticles(result);
    });
  }, []);

  const onCreateArticle = async (data) => {
    const newArticle = await carService.create(data);

    setArticles((state) => [...state, newArticle]);

    navigate("/catalog");
  };

  const onEdit = async (values) => {
    const result = await carService.edit(values._id, values);

    setArticles((state) =>
      state.map((x) => (x._id === values._id ? result : x))
    );

    navigate(`/catalog/${values._id}`);
  };

  const onDelete = (id) => {
    carService.delete(id);

    setArticles((state) => state.filter((x) => x.id !== id));

    navigate("/catalog");
  };

  const context = {
    id,
    article,
    articleId: id(id),
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
