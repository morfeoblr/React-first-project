import React from 'react';
import { Link } from 'react-router-dom';

const NavigationMenu = ({ currentPage = 'home' }) => {

  const getClassForLink = linkTo => {
    return currentPage === linkTo ? 'active' : null
  }

  return (
    <nav className="topnav" >
      <Link className={getClassForLink('home')} to="/">Home</Link>
      <Link className={getClassForLink('search')} to="/search">Search</Link>
      <Link className={getClassForLink('favorites')} to="/favorites">Favorites</Link>
      <Link className={getClassForLink('contacts')} to="/contacts">Contacts</Link>
      <form >
        <input type="search" name="q" placeholder="Search query" />
        <input type="submit" value="Go!" />
      </form>
    </nav>
  )
}

export default NavigationMenu