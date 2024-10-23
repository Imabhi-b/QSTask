// Filter.js
import React, { useState } from 'react';

const Filter = ({ groupBy, onGroupChange, orderBy, onOrderChange }) => {
  const [selectedOption, setSelectedOption] = useState('group');

  const handleDisplayChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div>
      <label htmlFor="display-select">Display:</label>
      <select id="display-select" onChange={handleDisplayChange}>
        <option value="group">Group By</option>
        <option value="order">Order By</option>
      </select>

      {selectedOption === 'group' && (
        <select value={groupBy} onChange={onGroupChange}>
          <option value="status">By Status</option>
          <option value="userId">By User</option>
          <option value="priority">By Priority</option>
        </select>
      )}

      {selectedOption === 'order' && (
        <select value={orderBy} onChange={onOrderChange}>
          <option value="priority">Priority</option>
          <option value="title">Title</option>
        </select>
      )}
    </div>
  );
};

export default Filter;
