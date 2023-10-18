import { useNavigate } from "react-router-dom";
import { useState, useEffect, createContext } from "react";

import { carServiceFactory } from "../services/carService";

export const ArticleContext = createContext();

export const ArticleProvider = ({ children }) => {

    const navigate = useNavigate();
    const [articles, setArticles] = useState([]);

    const carService = carServiceFactory(); //auth.accessToken

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
        articles,
        onCreateArticle,
        onEdit,
        onDelete
    };

    return (
        <>
            <ArticleContext.Provider value={context}>{children}</ArticleContext.Provider>
        </>
    )

}
