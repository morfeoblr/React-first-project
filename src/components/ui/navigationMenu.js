import React from 'react';
import { Link } from 'react-router-dom';

const NavigationMenu = ({ currentPage = 'home' }) => {
  return (
    <nav className="topnav" >
      <Link className={currentPage === 'home' ? 'active' : null} to="/">Home</Link>
      <Link className={currentPage === 'search' ? 'active' : null} to="/search">Search</Link>
      <Link className={currentPage === 'favorites' ? 'active' : null} to="/favorites">Favorites</Link>
      <Link className={currentPage === 'contacts' ? 'active' : null} to="/contacts">Contacts</Link>
      <form >
        <input type="search" name="q" placeholder="Search query" />
        <input type="submit" value="Go!" />
      </form>
    </nav>
  )
}

export default NavigationMenu