import { useState } from "react";
import { Modal, Form, Button } from "react-bootstrap";
import { DateRangePicker } from "react-date-range";
import { format, differenceInDays } from "date-fns";

import DirveModalCSS from "./DriveModal.module.css";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file

export const DriveModal = ({ show, onHide }) => {
  const [openCalendar, setOpenCalendar] = useState(false);
  const [date, setDate] = useState({
    startDate: new Date(),
    endDate: new Date(),
    key: "selection",
  });

  const days = differenceInDays(date.endDate, date.startDate);

  const handleChange = (ranges) => {
    setDate(ranges.selection);
  };

  const handleClickCalendar = () => {
    setOpenCalendar(!openCalendar);
  };
  return (
    <>
      <Modal show={show} onHide={onHide}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Button
                onClick={handleClickCalendar}
                variant="primary"
                //className={DirveModalCSS.calendar}
              >
                Select date range
              </Button>
              <span>{`${format(date.startDate, "dd MMM yyyy")} to ${format(
                date.endDate,
                "dd MMM yyyy"
              )}`}</span>
              <span>{`Days count ${days}`}</span>
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
          <Button variant="primary" onClick={onHide}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
