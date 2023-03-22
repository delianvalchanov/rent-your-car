import { Button } from "react-bootstrap";

import CarArticleCSS from "./assets/CarArticle.module.css";
import { StarRating } from "./StarRating/StarRating";

export const CarArticle = () => {
   return (
      <div className={CarArticleCSS.wrapper}>
         <img
            src={require(`./assets/images/mercedes-c-w203.jpg`)}
            alt="car picture"
         />
         <div className="row">
            <div className="col-8">
               <a href="/">
                  <h4 className={CarArticleCSS.carModel}>Mercedes C-classe</h4>
               </a>
            </div>
            <div className={`col-4 ${CarArticleCSS.price}`}>40$/day</div>
         </div>

         <div className={`row ${CarArticleCSS.carData}`}>
            <div className="col-6"><span>Host: Georgi</span></div>
            <div className="col-6"> <StarRating /></div>
         </div>

         <div className={`row ${CarArticleCSS.carData}`}>
            <span className={`col-6 ${CarArticleCSS.carEngine}`}>Engine: 2.2CDI</span>
            <span className={`col-6 ${CarArticleCSS.carPower}`}>Power: 150hp</span>
            <span className={`col-6 ${CarArticleCSS.carSeatCapacity}`}>Passengers: 4</span>
            <span className={`col-6 ${CarArticleCSS.carLuggageCapacity}`}>Luggage: 450l</span>
         </div>
         <div className={CarArticleCSS.buttonList}>
            <Button variant="outline-info" className={CarArticleCSS.button}>Details</Button>
            <Button variant="outline-success" className={CarArticleCSS.button}>Drive!</Button>
         </div>
      </div>


   );
};
