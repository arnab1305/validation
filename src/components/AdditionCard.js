import React, { useContext } from "react";
import "./AdditionCard.css";
import Form from "./Form";
import { TicketContext } from "../context/ticketData-context";

const AdditionCard = () => {
  const { formOpen,setFormOpen } = useContext(TicketContext);
  const formOpenHandler=()=>{
    setFormOpen(!formOpen)
  }
  return (
    <>
      {formOpen ? (
        <Form />
      ) : (
        <div className="add-form-container" onClick={formOpenHandler}>
          <div className="add-container">
            <img
              src="https://th.bing.com/th/id/OIP.5QzEIOaFCt5i4qBNQXkIQQHaHa?w=194&h=195&c=7&r=0&o=5&dpr=1.5&pid=1.7"
              alt="add"
            />
            <h1>CREATE NEW TICKET</h1>
          </div>
        </div>
      )}
    </>
  );
};

export default AdditionCard;
