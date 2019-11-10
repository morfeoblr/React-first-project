import React from 'react';
import Home from './home';
import Search from './search';
import Favorites from './favorites';
import Contacts from './contacts';
import { Route, Switch } from 'react-router-dom';
import { Whoops404 } from '../index';

const MainContent = ({ currentPage = 'home', searchInput = '',
  updateCurrentPage = f => f, updateFoundMovies = f => f }) => {
  return (
    <main>
      <Switch>
        <Route exact path="/" render={() => {
          if (currentPage !== 'home') updateCurrentPage('home');
          return <Home />
        }
        }
        />
        <Route exact path="/search" render={() => {
          if (currentPage !== 'search') {
            updateCurrentPage('search');
            updateFoundMovies(searchInput);
          }
          return <Search />
        }
        }
        />
        <Route exact path="/favorites" render={() => {
          if (currentPage !== 'favorites') updateCurrentPage('favorites');
          return <Favorites />
        }
        }
        />
        <Route exact path="/contacts" render={() => {
          if (currentPage !== 'contacts') updateCurrentPage('contacts');
          return <Contacts />
        }
        }
        />
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