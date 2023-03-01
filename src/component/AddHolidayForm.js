import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

const AddHolidayForm = ({ onAddHoliday }) => {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    onAddHoliday({ name, date });
    setName("");
    setDate("");
  };

  return (
    <div className="container">
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="name">
          <Form.Label>Holiday name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter holiday name"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="date">
          <Form.Label>Holiday date</Form.Label>
          <Form.Control
            type="date"
            placeholder="Enter holiday date"
            value={date}
            onChange={(event) => setDate(event.target.value)}
          />
          <p></p>
        </Form.Group>
        <Button variant="primary" type="submit">
          Add holiday
        </Button>
        <p></p>
      </Form>
    </div>
  );
};

export default AddHolidayForm;
