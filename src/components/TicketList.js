// TicketList.js
import React from 'react';
import TicketCard from './TicketCard';
import './styles/styles.css';

const TicketList = ({ tickets, users }) => {
  return (
    <div className="ticket-list">
      <div className="group-container">
        {Object.entries(tickets).map(([groupName, ticketArray]) => (
          <div key={groupName} className="group">
            <h2 className="group-name">{groupName}</h2>
            <div className="ticket-cards">
              {ticketArray.map(ticket => (
                <TicketCard key={ticket.id} ticket={ticket} users={users} /> // Pass users data
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TicketList;
