import EditCSS from "./assets/Edit.module.css"

import { Button } from "react-bootstrap";

export const Edit = (

) => {
    return (
        <section id={EditCSS['edit']}>
            <div className={EditCSS.container}>
                <div className={EditCSS.wrapper}>
                    <h3>Edit your car</h3>
                    <label htmlFor="car-model">Car model:</label>
                    <input id="car-model" type="text" name="carModel" placeholder="Enter your car model:" />
                    <label htmlFor="car-image">Car image:</label>
                    <input id="car-image" type="text" name="carImage" placeholder="Put your car`s image url here:" />
                    <label htmlFor="engine">Engine type:</label>
                    <input id="engine" type="text" name="engine" placeholder="Enter your car engine type:" />
                    <label htmlFor="power">Power:</label>
                    <input id="power" type="number" name="power" placeholder="Enter your car power:" />
                    <label htmlFor="seat-capacity">Seat capacity:</label>
                    <input id="seat-capacity" type="number" name="seatCapacity" placeholder="Seat capacity:" />
                    <label htmlFor="luggage-capacity">Luggage capacity:</label>
                    <input id="luggage-capacity" type="number" name="luggageCapacity" placeholder="Luggage capacity:" />
                    <Button className="btn">Submit</Button>
                </div>
            </div>
        </section>

    );
};
