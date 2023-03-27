import CreateCSS from "./assets/Create.module.css"

import { useState } from "react";
import { Button } from "react-bootstrap";

export const Create = (
    { onCreateArticle },

) => {
    const [values, setValues] = useState({
        model: '',
        carImage: '',
        fuel: '',
        power: 0,
        luggageCapacity: 0,
        seatCapacity: 0,
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
                    <h3>Create your car</h3>
                    <label htmlFor="model">Car model:</label>
                    <input value={values.model} onChange={onChangeHandler} id="model" type="text" name="model" />
                    <label htmlFor="carImage">Car image:</label>
                    <input value={values.carImage} onChange={onChangeHandler} id="carImage" type="text" name="carImage" />
                    <label htmlFor="fuel">Engine type:</label>
                    <input value={values.fuel} onChange={onChangeHandler} id="fuel" type="text" name="fuel" />
                    <label htmlFor="power">Power:</label>
                    <input value={values.power} onChange={onChangeHandler} id="power" type="number" name="power" />
                    <label htmlFor="seatCapacity">Seat capacity:</label>
                    <input value={values.seatCapacity} onChange={onChangeHandler} id="seatCapacity" type="number" name="seatCapacity" />
                    <label htmlFor="luggageCapacity">Luggage capacity:</label>
                    <input value={values.luggageCapacity} onChange={onChangeHandler} id="luggageCapacity" type="number" name="luggageCapacity" />
                    <input className="btn submit" type="submit" value="Submit" />
                </form>
            </div>
        </section>

    );
};

