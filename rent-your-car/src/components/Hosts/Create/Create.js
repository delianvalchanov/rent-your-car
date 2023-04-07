import CreateCSS from "./assets/Create.module.css"
import { useForm } from "../../../hooks/useForm";

import { useState } from "react";
import { Button } from "react-bootstrap";

export const Create = (
    { onCreateArticle },

) => {
    const { values, changeHandler, onSubmit } = useForm({
        model: '',
        price: '',
        location: '',
        carImage: '',
        year: '',
        fuel: 'petrol',
        fuelConsuption: '',
        power: 0,
        luggageCapacity: 0,
        bodyType: 'sedan',
        description: ''
    }, onCreateArticle)

    return (
        <section id={CreateCSS['create']}>
            <div className={CreateCSS.container}>
                <form className={CreateCSS.wrapper} onSubmit={onSubmit} method="POST">
                    <h3>Create your article</h3>
                    <div className="row">
                        <div className="col-6">
                            <label htmlFor="model">Vehicle model:</label>
                            <input value={values.model} onChange={changeHandler} id="model" type="text" name="model" />
                            <label htmlFor="price">Rental price per day:[$/day]</label>
                            <input value={values.price} onChange={changeHandler} id="price" type="text" name="price" />
                            <label htmlFor="location">Your location:</label>
                            <input value={values.location} onChange={changeHandler} id="location" type="text" name="location" />
                            <label htmlFor="carImage">Vehicle image URL:</label>
                            <input value={values.carImage} onChange={changeHandler} id="carImage" type="text" name="carImage" />
                            <label htmlFor="year">Vehicle year of production:</label>
                            <input value={values.year} onChange={changeHandler} id="year" type="text" name="year" />
                        </div>
                        <div className="col-6">
                            <label htmlFor="fuel">Engine type:</label>
                            <select value={values.fuel} onChange={changeHandler} name="fuel" id="fuel">
                                <option value="petrol">Petrol</option>
                                <option value="diesel">Diesel</option>
                                <option value="hybrid">Hybrid</option>
                                <option value="electric">Electric</option>
                            </select>
                            <label htmlFor="fuelConsumption">Fuel consumption:[L/100km]</label>
                            <input value={values.fuelConsumption} onChange={changeHandler} id="fuelConsumption" type="text" name="fuelConsuption" />
                            <label htmlFor="power">Power:[hp]</label>
                            <input value={values.power} onChange={changeHandler} id="power" type="number" name="power" />
                            <label htmlFor="bodyType">Body type:</label>
                            <select value={values.bodyType} onChange={changeHandler} name="bodyType" id="bodyType">
                                <option value="sedan">Sedan</option>
                                <option value="estate">Estate</option>
                                <option value="hatchback">Hatchback</option>
                                <option value="coupe">Coupe</option>
                                <option value="suv">SUV</option>
                            </select>
                            <label htmlFor="luggageCapacity">Luggage capacity:[L]</label>
                            <input value={values.luggageCapacity} onChange={changeHandler} id="luggageCapacity" type="number" name="luggageCapacity" />
                        </div>
                        <div className="col-12">
                            <label htmlFor="description">"Why should I choose you:" </label>
                            <textarea value={values.description} onChange={changeHandler} name="description" id="description" cols="2" rows="6">
                            </textarea>
                        </div>
                    </div>
                    <Button className="btn submit" type="submit" value="Submit" onChange={changeHandler}
                    >Submit</Button>
                </form>
            </div>
        </section>

    );
};

