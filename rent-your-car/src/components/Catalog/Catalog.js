import { CarArticle } from "./CarArticle";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { useContext } from "react";

import CatalogCSS from "./assets/Catalog.module.css";
import { AuthContext } from "../../contexts/AuthContext";
import { ArticleContext } from "../../contexts/ArticleContext";

export const Catalog = () => {
  const { isAuthenticated } = useContext(AuthContext);
  const { articles } = useContext(ArticleContext);

  return (
    <>
      <div className={`row ${CatalogCSS.wrapper}`}>
        {isAuthenticated && (
          <Link to="/catalog/create" className={CatalogCSS.addBtn}>
            <Button variant="outline-primary">Add new</Button>
          </Link>
        )}
        {articles.map((x) => (
          <CarArticle
            key={x._id}
            {...x}
            className={`col-lg-4 ${CatalogCSS.article}`}
          />
        ))}
      </div>
    </>
  );
};
