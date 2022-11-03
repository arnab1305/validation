import React, { useContext } from "react";
import "./Tickets.css";
import { TicketContext } from "../context/ticketData-context";

const Tickets = () => {
  const { tickets } = useContext(TicketContext);
  return (
    <>
      {tickets.map((item) => (
        <div className="ticket-container">
          <div>
            <span className="head">First Name:</span>
            <span>{item.first_name}</span>
            <span className="head">Last Name:</span>
            <span>{item.last_name}</span>
            <span className="head">Contact:</span>
            <span>{item.contact}</span>
          </div>
          <div>
            <span className="head">Email:</span>
            <span>{item.email}</span>
            <span className="head">Service Type:</span>
            <span>{item.service_type}</span>
          </div>
          <div>
            <span className="head">Date:</span>
            <span>{item.date}</span>
            <span className="head">Time:</span>
            <span>{item.time}</span>
          </div>
        </div>
      ))}
    </>
  );
};

export default Tickets;
