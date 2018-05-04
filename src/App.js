import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import './Assets/css/default.min.css';

// Components
import Header from './components/headerComponent/header';
import Footer from './components/footerComponent/footer';
import Homepage from './components/pages/homePage';
import Projects from './components/pages/projects';
import View from './components/pages/projectView';
import Form from './components/projectForm/projectForm';
import Submission from './components/pages/projectSubmit';



class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">

        <Header />

          <Route exact path = '/' component={ Homepage } />
          <Route exact path = '/Projects' component = { Projects } />
          <Route exact path = '/View' component = { View } />
          <Route exact path = '/Submit' component = { Submission } />

        <Footer />

      </div>
      </Router>
    );
  }
}

export default App;
