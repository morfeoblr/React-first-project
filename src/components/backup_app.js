import React, { Component } from 'react';
import './App.css';
import Header from './ui/header'
import NavigationMenuContainer from './containers/navigationMenuContainer'
import MainContent from './ui/mainContent';
import Footer from './ui/footer';
import { BrowserRouter as Router } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App" >
        <Header />
        <Router>
          <NavigationMenuContainer />
          <MainContent />
        </Router>
        <Footer />
      </div>
    );
  }
}

export default App;
