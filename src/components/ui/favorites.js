import React from 'react'

const favorites = ({ updateCurrentPage = f => f }) => {

  updateCurrentPage('favorites');

  return (
    <article>
      <h2>Favorites to be here</h2>
    </article >
  );
}

export default favorites;