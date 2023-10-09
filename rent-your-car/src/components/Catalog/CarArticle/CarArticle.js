import { Button } from "react-bootstrap";
import { Link } from 'react-router-dom';
import { useState, useContext } from 'react';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

import { AuthContext } from "../../../contexts/AuthContext";

import CarArticleCSS from "./assets/CarArticle.module.css";
import { StarRating } from "./StarRating/StarRating";

export const CarArticle = ({
   _id,
   carImage,
   model,
   price,
   fuel,
   bodyType,
}) => {
   const { isAuthenticated } = useContext(AuthContext)
   const [show, setShow] = useState(false);

   const handleClose = () => setShow(false);
   const handleShow = () => setShow(true);


   return (
      <div className={CarArticleCSS.wrapper}>
         <img
            src={carImage}
            alt="car picture"
         />
         <div className="row">
            <div className="col-7">
               <Link to={`/catalog/${_id}`}>
                  <h4 className={CarArticleCSS.carModel}>{model}</h4>
               </Link>
            </div>
            <div className={`col-5 ${CarArticleCSS.price}`}>{price}$/day</div>
         </div>

         <div className={`row ${CarArticleCSS.carData}`}>
            <div className="col-7"><span>Host: Georgi</span></div>
            <div className="col-5"> <StarRating /></div>
         </div>

         <div className={`row ${CarArticleCSS.carData}`}>
            <span className={`col-7 ${CarArticleCSS.carEngine}`}>Fuel: {fuel}</span>
            <span className={`col-5 ${CarArticleCSS.carSeatCapacity}`}>Body type: {bodyType}</span>
         </div>

         <div className={CarArticleCSS.buttonList}>
            <Link to={`/catalog/${_id}`}><Button variant="outline-info" className={CarArticleCSS.button}>Details</Button></Link>
            {isAuthenticated && (
               <Button onClick={handleShow} variant="outline-success" className={CarArticleCSS.button}>Drive!</Button>
            )}
         </div>

         <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
               <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>
               <Form>
                  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                     <Form.Label>Email address</Form.Label>
                     <Form.Control
                        type="email"
                        placeholder="name@example.com"
                        autoFocus
                     />
                  </Form.Group>
                  <Form.Group
                     className="mb-3"
                     controlId="exampleForm.ControlTextarea1"
                  >
                     <Form.Label>Example textarea</Form.Label>
                     <Form.Control as="textarea" rows={3} />
                  </Form.Group>
               </Form>
            </Modal.Body>
            <Modal.Footer>
               <Button variant="secondary" onClick={handleClose}>
                  Close
               </Button>
               <Button variant="primary" onClick={handleClose}>
                  Save Changes
               </Button>
            </Modal.Footer>
         </Modal>
      </div>


   );
};
