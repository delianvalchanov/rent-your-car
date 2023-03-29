import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"

import * as carService from "../../../services/carService"
import DetailsCSS from "./Details.module.css"

export const Details = () => {

    const { articleId } = useParams();
    const [car, setCar] = useState({});

    useEffect(() => {
        carService.getOne(articleId)
            .then(result => {
                setCar(result);
            })
    }, [articleId]);

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
                    <p>Vehicle location: {car.location}</p>
                    <p>Body type: {car.bodyType}</p>
                    <p>Fuel type: {car.fuel}</p>
                    <p>Fuel consumption: {car.fuelConsumtion}L/100km</p>
                    <p>Engine power: {car.power}hp</p>
                    <p>Luggage capacity: {car.luggageCapacity}L</p>
                    <p>Why should you choose this vehicle: {car.description}</p>
                </div>
            </div>
        </div>
    )
}