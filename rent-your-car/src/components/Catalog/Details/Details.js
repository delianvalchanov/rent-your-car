import { useContext, useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";

import { carServiceFactory } from "../../../services/carService";
import { useAuthService } from "../../../hooks/useAuthService";
import DetailsCSS from "./Details.module.css";
import { AuthContext } from "../../../contexts/AuthContext";
import { ArticleContext } from "../../../contexts/ArticleContext";
import { Toaster, toast } from "react-hot-toast";

export const Details = () => {
  //const { username } = useContext(AuthContext)
  const { onDelete } = useContext(ArticleContext);
  const { userId } = useContext(AuthContext);
  const carService = useAuthService(carServiceFactory);
  const navigate = useNavigate();
  const { articleId } = useParams();
  const [car, setCar] = useState({});

  useEffect(() => {
    carService.getOne(articleId).then((result) => {
      setCar(result);
    });
  }, [articleId]);

  const onDeleteClick = async () => {
    //eslint-disable-next-line no-restricted-globals
    const result = confirm(`Are you sure you want to delete ${car.model}`);

    if (result) {
      await carService.delete(articleId);
      onDelete(articleId);
    }
  };

  return (
    <div className={DetailsCSS.wrapper}>
      <h2>Detailed information</h2>
      <div className="row">
        <div className="col-lg-5">
          <img
            src={car.carImage}
            className={DetailsCSS.image}
            alt="car displayed"
          />
        </div>
        <div className={`col-lg-7 ${DetailsCSS.carInfo}`}>
          <p>Car model: {car.model} </p>
          <p>Year of production: {car.year} </p>
          <p>Price: {car.price}$/per day</p>
          <p>Body type: {car.bodyType}</p>
          <p>Fuel type: {car.fuel}</p>
          <p>Why should you choose this vehicle: {car.description}</p>
        </div>
      </div>
      {userId === car._ownerId && (
        <div>
          <Link to={`/catalog/${articleId}/edit`}>
            <Button variant="outline-info">Edit</Button>
          </Link>
          <Button onClick={onDeleteClick} variant="outline-danger">
            Delete
          </Button>
          <Toaster />
        </div>
      )}
    </div>
  );
};
