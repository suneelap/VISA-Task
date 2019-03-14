import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router} from 'react-router-dom';
import AppRoutes from './AppRoutes';
import { Provider } from "react-redux";
import store from './store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router><AppRoutes/></Router>
      </Provider>
    );
  }
}

export default App;
