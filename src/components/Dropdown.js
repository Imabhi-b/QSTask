import React from 'react';

const Dropdown = ({ setGroupBy, setOrderBy }) => {
  return (
    <div className="dropdown-container">
      <div className="grouping-dropdown">
        <label>Grouping: </label>
        <select onChange={(e) => setGroupBy(e.target.value)}>
          <option value="Status">By Status</option>
          <option value="User">By User</option>
          <option value="Priority">By Priority</option>
        </select>
      </div>
      <div className="ordering-dropdown">
        <label>Ordering: </label>
        <select onChange={(e) => setOrderBy(e.target.value)}>
          <option value="Priority">By Priority</option>
          <option value="Title">By Title</option>
        </select>
      </div>
    </div>
  );
};

export default Dropdown;
