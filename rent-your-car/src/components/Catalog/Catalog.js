import { CarArticle } from "./CarArticle";
import { Link } from "react-router-dom";
import { Button, Container } from "react-bootstrap";
import { useContext } from "react";

import CatalogCSS from "./assets/Catalog.module.css";
import { AuthContext } from "../../contexts/AuthContext";
import { ArticleContext } from "../../contexts/ArticleContext";

export const Catalog = () => {
  const { isAuthenticated } = useContext(AuthContext);
  const { articles } = useContext(ArticleContext);

  return (
    <Container>
      <div className={CatalogCSS.wrapper}>
        {isAuthenticated && (
          <Link to="/catalog/create" className={CatalogCSS.addBtn}>
            <Button className={CatalogCSS.button} variant="outline-primary">Add new</Button>
          </Link>
        )}
        <div className={`row ${CatalogCSS.articleWrapper}`}>
          {articles.map((x) => (

            <CarArticle
              key={x._id}
              {...x}
              className={`col-lg-5 ${CatalogCSS.article}`}
            />

          ))}
        </div>
      </div>
    </Container>
  );
};
