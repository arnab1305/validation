import React, { useState, useContext } from "react";
import "./Form.css";
import Input from "./UI/Input";
import Select from "./UI/Select";
import TextArea from "./UI/TextArea";
import Button from "./UI/Button";
import { validate } from "../utils/validation.util";
import { TicketContext } from "../context/ticketData-context";

const Form = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [date, setDate] = useState("");
  const [email, setEmail] = useState("");
  const [serviceType, setServiceType] = useState("");
  const [contact, setContact] = useState("");
  const [error, setError] = useState("");
  const [department, setDepartment] = useState("");
  const [comName, setComName] = useState("");
  const [describe, setDescribe] = useState("");
  const { addTicket } = useContext(TicketContext);
  const firstNameHandler = (event) => {
    setFirstName(event.target.value);
  };
  const dateHandler = (event) => {
    setDate(event.target.value);
  };
  const lastNameHandler = (event) => {
    setLastName(event.target.value);
  };
  const emailHandler = (event) => {
    setEmail(event.target.value);
  };
  const serviceHandler = (event) => {
    setServiceType(event.target.value);
  };
  const contactHandler = (event) => {
    setContact(event.target.value);
  };
  const depHandler = (event) => {
    setDepartment(event.target.value);
  };
  const comHandler = (event) => {
    setComName(event.target.value);
  };
  const desHandler = (event) => {
    setDescribe(event.target.value);
  };
  const resetForm = () => {
    setContact("");
    setDate("");
    setEmail("");
    setFirstName("");
    setLastName("");
    setServiceType("");
    setComName("");
    setDepartment("");
    setDescribe("");
  };
  const submitHandler = (event) => {
    event.preventDefault();
    const { status, errorMsg } = validate(email, contact, firstName, lastName);
    if (status === false) {
      setError(errorMsg);
    } else {
      const ticketToAdd = {
        first_name: firstName,
        last_name: lastName,
        email: email,
        contact: contact,
        service_type: serviceType,
        date: date,
      };
      addTicket(ticketToAdd);
      resetForm();
    }
  };
  const option = ["High Priority", "Low Priority", "Critical Priority"];
  return (
    <div className="form-container">
      <h2 className="header">Ticket Form</h2>
      <form onSubmit={submitHandler}>
        <Input
          type="date"
          label="Date"
          onChange={dateHandler}
          required
          value={date}
        />
        <div className="input-box">
          <div>
            <Input
              type="text"
              label="First Name"
              onChange={firstNameHandler}
              value={firstName}
            />
          </div>
          <div>
            <Input
              type="text"
              label="Last Name"
              onChange={lastNameHandler}
              value={lastName}
            />
          </div>
        </div>
        <div className="input-box">
          <div>
            <Input
              type="text"
              label="Email"
              onChange={emailHandler}
              value={email}
            />
          </div>
          <div>
            <Input
              type="text"
              label="Contact No."
              onChange={contactHandler}
              value={contact}
            />
          </div>
        </div>

        <div className="input-box">
          <div>
            <Input
              type="text"
              label="Department"
              required
              value={department}
              onChange={depHandler}
            />
          </div>
          <div>
            <Input
              type="text"
              label="Computer Name"
              required
              value={comName}
              onChange={comHandler}
            />
          </div>
        </div>
        <Select
          label="Service Type"
          options={option}
          onChange={serviceHandler}
          required
          value={serviceType}
        />
        <div className="des-box">
          <TextArea
            type="textbox"
            label="Describe The Problem"
            required
            value={describe}
            onChange={desHandler}
          />
        </div>
        <Button type="submit">Submit</Button>
        <span className="error-box">{error}</span>
      </form>
    </div>
  );
};

export default Form;
