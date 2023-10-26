import { Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useState, useContext } from "react";

import { AuthContext } from "../../../contexts/AuthContext";

import CarArticleCSS from "./assets/CarArticle.module.css";
import { StarRating } from "./StarRating/StarRating";
import { DriveModal } from "./DriveModal/DriveModal";
import { ArticleContext } from "../../../contexts/ArticleContext";
import { toast } from "react-hot-toast";

export const CarArticle = ({ _id, carImage, model, price, fuel, bodyType }) => {
  const { isAuthenticated, email } = useContext(AuthContext);
  const [show, setShow] = useState(false);
  const { articleId } = useContext(ArticleContext);

  const toggleShow = () => {
    setShow(!show);
  };

  const successfullSubmission = () => {
    toast.success("You successfully rented a car!", {
      duration: 1000,
    });
    setTimeout(() => {
      setShow(!show);
    }, 1000);
  };

  return (
    <div className={CarArticleCSS.wrapper}>
      <img src={carImage} alt="car displayed" />
      <div className="row">
        <div className="col-7">
          <Link to={`/catalog/${_id}`}>
            <h4 className={CarArticleCSS.carModel}>{model}</h4>
            <p>{articleId}</p>
          </Link>
        </div>
        <div className={`col-5 ${CarArticleCSS.price}`}>{price}$/day</div>
      </div>

      <div className={`row ${CarArticleCSS.carData}`}>
        <div className="col-7">
          <span>{`Host: ${email}`}</span>
        </div>
        <div className="col-5">
          {" "}
          <StarRating id={_id} />
        </div>
      </div>

      <div className={`row ${CarArticleCSS.carData}`}>
        <span className={`col-7 ${CarArticleCSS.carEngine}`}>Fuel: {fuel}</span>
        <span className={`col-5 ${CarArticleCSS.carSeatCapacity}`}>
          Body type: {bodyType}
        </span>
      </div>

      <div className={CarArticleCSS.buttonList}>
        <Link to={`/catalog/${_id}`}>
          <Button variant="outline-info" className={CarArticleCSS.button}>
            Details
          </Button>
        </Link>
        {isAuthenticated && (
          <Button
            onClick={toggleShow}
            variant="outline-success"
            className={CarArticleCSS.button}
          >
            Drive!
          </Button>
        )}
      </div>

      <DriveModal
        show={show}
        toggleShow={toggleShow}
        successfullSubmission={successfullSubmission}
        id={_id}
      />
    </div>
  );
};
