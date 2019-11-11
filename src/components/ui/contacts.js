import React from 'react'

const contacts = ({ updateCurrentPage = f => f }) => {

  updateCurrentPage('contacts');

  return (
    <article>
      <h2>Contacts to be here!</h2>
    </article>
  );
}

export default contacts;