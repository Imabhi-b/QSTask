// App.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import TicketList from './components/TicketList';
import Filter from './components/Filter';
import './styles/styles.css';

const App = () => {
  const [tickets, setTickets] = useState([]);
  const [users, setUsers] = useState([]); // State for users
  const [groupBy, setGroupBy] = useState('status');
  const [orderBy, setOrderBy] = useState('priority');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://api.quicksell.co/v1/internal/frontend-assignment');
        setTickets(response.data.tickets);
        setUsers(response.data.users); // Set users data
      } catch (error) {
        console.error("Error fetching tickets:", error);
      }
    };
    fetchData();
  }, []);

  const handleGroupChange = (event) => {
    setGroupBy(event.target.value);
  };

  const handleOrderChange = (event) => {
    setOrderBy(event.target.value);
  };

  // Group and sort tickets
  const groupedTickets = groupAndSortTickets(tickets, groupBy, orderBy);

  return (
    <div>
      <Filter groupBy={groupBy} onGroupChange={handleGroupChange} orderBy={orderBy} onOrderChange={handleOrderChange} />
      <TicketList tickets={groupedTickets} users={users} /> {/* Pass users data */}
    </div>
  );
};

const groupAndSortTickets = (tickets, groupBy, orderBy) => {
  const grouped = tickets.reduce((acc, ticket) => {
    const key = ticket[groupBy];
    if (!acc[key]) {
      acc[key] = [];
    }
    acc[key].push(ticket);
    return acc;
  }, {});

  // Sort each group
  Object.keys(grouped).forEach((key) => {
    grouped[key].sort((a, b) => {
      if (orderBy === 'priority') {
        return b.priority - a.priority; // Descending order
      } else if (orderBy === 'title') {
        return a.title.localeCompare(b.title); // Ascending order
      }
      return 0;
    });
  });

  return grouped;
};

export default App;
