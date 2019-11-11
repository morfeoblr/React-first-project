import React from 'react'

const contacts = ({ currentPage, updateCurrentPage }) => {

  if (currentPage !== 'contacts') updateCurrentPage('contacts');

  return (
    <article>
      <h2>Contacts to be here!</h2>
    </article>
  );
}

export default contacts;