import React, { Component } from 'react';
import Menu from './components/Menu/Menu';
import Gliders from './components/Gliders/Gliders';
import NewsHomepage from './components/NewsHomepage/NewsHomepage';
import './App.css';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Menu />
        <div className="titleWrapper">
          <h1>News</h1>
        </div>
        <NewsHomepage />
        <div className="titleWrapper">
          <h1>Latest Gliders</h1>
          <a>SEE ALL</a>
        </div>
        <Gliders />
      </React.Fragment>
    );
  }
}

export default App;
