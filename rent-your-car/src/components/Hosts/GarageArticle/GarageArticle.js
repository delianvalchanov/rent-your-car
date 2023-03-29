import { Button } from "react-bootstrap";

import GarageArticleCSS from "./assets/GarageArticle.module.css";
import { StarRating } from "../../Catalog/CarArticle/StarRating/StarRating";

export const GarageArticle = ({
    carImage,
    model,
    power,
    price,
    fuel,
    bodyType,
    luggageCapacity
}) => {
    return (
        <div className={GarageArticleCSS.wrapper}>
            <img
                src={carImage}
                alt="car picture"
            />
            <div className="row">
                <div className="col-8">
                    <a href="/">
                        <h4 className={GarageArticleCSS.carModel}>{model}</h4>
                    </a>
                </div>
                <div className={`col-4 ${GarageArticleCSS.price}`}>{price}$/day</div>
            </div>

            <div className={`row ${GarageArticleCSS.carData}`}>
                <div className="col-6"><span>Host: Georgi</span></div>
                <div className="col-6"> <StarRating /></div>
            </div>

            <div className={`row ${GarageArticleCSS.carData}`}>
                <span className={`col-6 ${GarageArticleCSS.carEngine}`}>Fuel: {fuel}</span>
                <span className={`col-6 ${GarageArticleCSS.carPower}`}>Power: {power}hp</span>
                <span className={`col-6 ${GarageArticleCSS.carSeatCapacity}`}>Body type: {bodyType}</span>
                <span className={`col-6 ${GarageArticleCSS.carLuggageCapacity}`}>Boot capacity: {luggageCapacity}L</span>
            </div>
            <div className={GarageArticleCSS.buttonList}>
                <Button variant="outline-success" className={GarageArticleCSS.button}>Edit</Button>
                <Button variant="outline-danger" className={GarageArticleCSS.button}>Delete</Button>
            </div>
        </div>


    );
};
