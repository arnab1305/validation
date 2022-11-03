import { createContext, useState } from "react";

export const TicketContext = createContext({
  tickets: [],
  addTicket: () => {},
  formOpen: false,
  setFormOpen: () => {},
});

export const TicketProvider = ({ children }) => {
  const [tickets, setTickets] = useState([]);
  const [formOpen, setFormOpen] = useState(false);
  const addTicket = (ticketToAdd) => {
    const date = new Date();
    const currentTime = date.toLocaleTimeString("en-US");
    setTickets([...tickets, { ...ticketToAdd, time: currentTime }]);
  };
  const value = { tickets, addTicket, formOpen, setFormOpen };

  return (
    <TicketContext.Provider value={value}>{children}</TicketContext.Provider>
  );
};
