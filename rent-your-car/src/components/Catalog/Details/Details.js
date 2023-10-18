import { useContext, useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom"
import { Button } from 'react-bootstrap';

import { carServiceFactory } from '../../../services/carService';
import { useAuthService } from "../../../hooks/useAuthService";
import DetailsCSS from "./Details.module.css"
import { AuthContext } from "../../../contexts/AuthContext";
import { ArticleContext } from "../../../contexts/ArticleContext";

export const Details = () => {
    const { userId } = useContext(AuthContext)
    const { onDelete, id } = useContext(ArticleContext)
    const carService = useAuthService(carServiceFactory)
    const { articleId } = useParams();
    const [car, setCar] = useState({});

    useEffect(() => {
        carService.getOne(articleId)
            .then(result => {
                setCar(result);
            })
    }, [articleId]);

    id(articleId)


    return (
        <div className={DetailsCSS.wrapper}>
            <h2>Detailed information</h2>
            <div className="row">
                <div className="col-lg-5">
                    <img className={DetailsCSS.image} src={car.carImage} alt="car image" />
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
                    <Link to={`/catalog/${articleId}/edit`}><Button variant="outline-info">Edit</Button></Link>
                    <Button onClick={() => onDelete(car._id)} variant="outline-danger">Delete</Button>
                </div>
            )}
        </div>
    )
}