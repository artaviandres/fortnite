import React from 'react';
import Select from '../Select/Select';
import SearchIcon from '../../assets/Search.png';

import './Filters.css';

const rarity = ['Legendary', 'Epic', 'Rare', 'Uncommon'];
const sortBy = ['Newest first', 'Oldest first', 'Rarity ASC', 'Rarity DESC', 'Slot', 'Color'];

const Filters = () => (
  <div className="filtersWrapper">
    <div className="blockWrapper">
      <h5>Rarity:</h5>
      <Select placeholder="Rarity" options={rarity} />
    </div>
    <div className="blockWrapper">
      <h5>Sort By:</h5>
      <Select placeholder="Sort By" options={sortBy} />
    </div>
    <div className="searchWrapper">
      <input type="text" placeholder="Type to search skin" />
      <img src={SearchIcon} />
    </div>
  </div>
);

export default Filters;