import React, { useContext } from "react";
import "./DisplayCard.css";
import Tickets from "./Tickets";
import { TicketContext } from "../context/ticketData-context";

const DisplayCard = () => {
  const { tickets } = useContext(TicketContext);
  return (
    <div className="main-container">
      <h2>Active Tickets</h2>
      {tickets.length > 0 ? <Tickets /> : <div className="no-ticket-box">No active tickets found</div>}
    </div>
  );
};

export default DisplayCard;
