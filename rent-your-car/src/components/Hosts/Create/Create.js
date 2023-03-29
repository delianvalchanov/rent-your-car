import CreateCSS from "./assets/Create.module.css"

import { useState } from "react";
import { Button } from "react-bootstrap";

export const Create = (
    { onCreateArticle },

) => {
    const [values, setValues] = useState({
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
    })

    const onChangeHandler = (e) => {
        setValues(state => ({ ...state, [e.target.name]: e.target.value }))
    }

    const onSubmitHandler = (e) => {
        e.preventDefault();

        onCreateArticle(values);
    }

    return (
        <section id={CreateCSS['create']}>
            <div className={CreateCSS.container}>
                <form className={CreateCSS.wrapper} onSubmit={onSubmitHandler}>
                    <h3>Create your article</h3>
                    <div className="row">
                        <div className="col-6">
                            <label htmlFor="model">Vehicle model:</label>
                            <input value={values.model} onChange={onChangeHandler} id="model" type="text" name="model" />
                            <label htmlFor="price">Rental price per day:[$/day]</label>
                            <input value={values.price} onChange={onChangeHandler} id="price" type="text" name="price" />
                            <label htmlFor="location">Your location:</label>
                            <input value={values.location} onChange={onChangeHandler} id="location" type="text" name="location" />
                            <label htmlFor="carImage">Vehicle image URL:</label>
                            <input value={values.carImage} onChange={onChangeHandler} id="carImage" type="text" name="carImage" />
                            <label htmlFor="year">Vehicle year of production:</label>
                            <input value={values.year} onChange={onChangeHandler} id="year" type="text" name="year" />
                        </div>
                        <div className="col-6">
                            <label htmlFor="fuel">Engine type:</label>
                            <select value={values.fuel} onChange={onChangeHandler} name="fuel" id="fuel">
                                <option value="petrol">Petrol</option>
                                <option value="diesel">Diesel</option>
                                <option value="hybrid">Hybrid</option>
                                <option value="electric">Electric</option>
                            </select>
                            <label htmlFor="fuelConsumption">Fuel consumption:[L/100km]</label>
                            <input value={values.fuelConsumption} onChange={onChangeHandler} id="fuelConsumption" type="text" name="fuelConsuption" />
                            <label htmlFor="power">Power:[hp]</label>
                            <input value={values.power} onChange={onChangeHandler} id="power" type="number" name="power" />
                            <label htmlFor="bodyType">Body type:</label>
                            <select value={values.bodyType} onChange={onChangeHandler} name="bodyType" id="bodyType">
                                <option value="sedan">Sedan</option>
                                <option value="estate">Estate</option>
                                <option value="hatchback">Hatchback</option>
                                <option value="coupe">Coupe</option>
                                <option value="suv">SUV</option>
                            </select>
                            <label htmlFor="luggageCapacity">Luggage capacity:[L]</label>
                            <input value={values.luggageCapacity} onChange={onChangeHandler} id="luggageCapacity" type="number" name="luggageCapacity" />
                        </div>
                        <div className="col-12">
                            <label htmlFor="description">"Why should I choose you:" </label>
                            <textarea value={values.description} onChange={onChangeHandler} name="description" id="description" cols="2" rows="6">
                            </textarea>
                        </div>
                    </div>
                    <Button className="btn submit" type="submit" value="Submit" onChange={onChangeHandler}
                    >Submit</Button>
                </form>
            </div>
        </section>

    );
};

