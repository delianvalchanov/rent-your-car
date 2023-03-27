import { Button } from "react-bootstrap";

import CarArticleCSS from "./assets/CarArticle.module.css";
import { StarRating } from "./StarRating/StarRating";

export const CarArticle = ({

   carImage,
   model,
   fuel,
   power,
   seatCapacity,
   luggageCapacity
}) => {
   return (
      <div className={CarArticleCSS.wrapper}>
         <img
            src={carImage}
            alt="car picture"
         />
         <div className="row">
            <div className="col-8">
               <a href="/">
                  <h4 className={CarArticleCSS.carModel}>{model}</h4>
               </a>
            </div>
            <div className={`col-4 ${CarArticleCSS.price}`}>40$/day</div>
         </div>

         <div className={`row ${CarArticleCSS.carData}`}>
            <div className="col-6"><span>Host: Georgi</span></div>
            <div className="col-6"> <StarRating /></div>
         </div>

         <div className={`row ${CarArticleCSS.carData}`}>
            <span className={`col-6 ${CarArticleCSS.carEngine}`}>Fuel: {fuel}</span>
            <span className={`col-6 ${CarArticleCSS.carPower}`}>Power: {power}hp</span>
            <span className={`col-6 ${CarArticleCSS.carSeatCapacity}`}>Passengers: {seatCapacity}</span>
            <span className={`col-6 ${CarArticleCSS.carLuggageCapacity}`}>Boot capacity: {luggageCapacity}L</span>
         </div>
         <div className={CarArticleCSS.buttonList}>
            <Button variant="outline-info" className={CarArticleCSS.button}>Details</Button>
            <Button variant="outline-success" className={CarArticleCSS.button}>Drive!</Button>
         </div>
      </div>


   );
};
