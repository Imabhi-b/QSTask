// TicketCard.js
import React from 'react';

const TicketCard = ({ ticket, users }) => {
  // Find the user by userId
  const user = users.find(user => user.id === ticket.userId);
  
  // Map priority level to corresponding name
  const priorityMap = {
    4: 'Urgent',
    3: 'High',
    2: 'Medium',
    1: 'Low',
    0: 'No priority'
  };

  return (
    <div className="ticket-card">
      <h3>{ticket.title}</h3>
      <p>Status: {ticket.status}</p>
      <p>Priority: {priorityMap[ticket.priority]}</p>
      <p>Assigned User: {user ? user.name : 'Unassigned'}</p>
    </div>
  );
};

export default TicketCard;
