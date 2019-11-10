import React from 'react';

const filters = ({ searchInput = '', onUpdate = f => f }) => {
  return (
    <div className="filters_sidebar">
      <div className="searchInput">
        <div className="filterWrapper">
          <input
            className="input_input"
            placeholder="Movie title"
            value={searchInput}
            onChange={e => onUpdate(e.target.value)} />
        </div>
      </div>
    </div>
  );
}

export default filters;