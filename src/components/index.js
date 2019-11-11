import Header from './ui/header';
import NavigationMenu from './containers/navigationMenu';
import MainContent from './ui/mainContent';
import Footer from './ui/footer';
import './App.css';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

export const App = () =>
  <Router>
    <div className="App" >
      <Header />
      <NavigationMenu />
      <MainContent />
      <Footer />
    </div>
  </Router>

export const Whoops404 = ({ location }) =>
  <div>
    <h1>Whoops, route not found</h1>
    <p>Cannot find content for {location.pathname}</p>
  </div>