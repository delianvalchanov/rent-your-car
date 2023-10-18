import { useState, useEffect } from "react";
import { Modal, Form, Button } from "react-bootstrap";
import { DateRangePicker } from "react-date-range";
import { format, differenceInDays } from "date-fns";
import { carServiceFactory } from "../../../../services/carService";
import { useAuthService } from "../../../../hooks/useAuthService";

import DirveModalCSS from "./DriveModal.module.css";
import "react-date-range/dist/styles.css"; // main calendar style file
import "react-date-range/dist/theme/default.css"; // theme calendar css file

export const DriveModal = ({ show, onHide, id }) => {
  const [openCalendar, setOpenCalendar] = useState(false);
  const carService = useAuthService(carServiceFactory)
  const [car, setCar] = useState({});
  const [date, setDate] = useState({
    startDate: new Date(),
    endDate: new Date(),
    key: "selection",
  });


  useEffect(() => {
    carService.getOne(id)
      .then(result => {
        setCar(result);
      })
  }, [id]);

  const days = differenceInDays(date.endDate, date.startDate);
  const totalPrice = days * car.price

  const handleChange = (ranges) => {
    setDate(ranges.selection);
  };

  const handleClickCalendar = () => {
    setOpenCalendar(!openCalendar);
  };
  return (
    <>
      <Modal size="lg" show={show} onHide={onHide}>
        <Modal.Header closeButton>
          <Modal.Title>Select duration and confirm choices</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Button
                onClick={handleClickCalendar}
                variant="primary"
                className="mb-1"
              >
                {`${format(date.startDate, "dd MMM yyyy")} to ${format(
                  date.endDate,
                  "dd MMM yyyy"
                )}`}
              </Button>
              <span className={DirveModalCSS.label}>Total days renting:
                <p className={DirveModalCSS.value}>{`${days}`}</p>days
              </span>
              <span className={DirveModalCSS.label}>Final price:
                <p className={DirveModalCSS.value}>{`${totalPrice}`}</p>$</span>
              {openCalendar && (
                <DateRangePicker
                  ranges={[date]}
                  onChange={handleChange}
                  minDate={new Date()}
                />
              )}
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={onHide}>
            Close
          </Button>
          <Button variant="success" onClick={onHide}>
            Confirm
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
