import React from 'react'

const favorites = ({ currentPage, updateCurrentPage }) => {

  if (currentPage !== 'favorites') updateCurrentPage('favorites')

  return (
    <article>
      <h2>Favorites to be here</h2>
    </article >
  );
}

export default favorites;