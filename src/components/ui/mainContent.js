import React from 'react';
import Home from '../containers/home';
import Search from '../containers/search';
import Favorites from '../containers/favorites';
import Contacts from '../containers/contacts';
import { Route, Switch } from 'react-router-dom';
import { Whoops404 } from '../index';

const MainContent = ({ currentPage = 'home', searchInput = '',
  updateCurrentPage = f => f, updateFoundMovies = f => f }) => {
  return (
    <main>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/search" component={Search} />
        <Route exact path="/favorites" component={Favorites} />
        <Route exact path="/contacts" component={Contacts} />
        <Route path="*" component={Whoops404} />
      </Switch>
      <aside>
        <h4>Our partners</h4>
        <ul>
          <li><a href="#">Partner 1</a></li>
          <li><a href="#">Partner 2</a></li>
        </ul>
      </aside>
    </main >
  );
}

export default MainContent;