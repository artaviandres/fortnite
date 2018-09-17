import React from 'react';
import Menu from './components/Menu/Menu';
import Filters from './components/Filters/Filters';

import './Skins.css';

export default class Skins extends React.Component {
  render() {
    return (
      <div className="skinsWrapper">
        <Menu />
        <h1>Skins</h1>
        <Filters />
      </div>
    );
  }
}