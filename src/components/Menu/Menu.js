import React from 'react';
import Logo from '../../assets/fortnite-logo.png';
import './Menu.css'

const Menu = () => (
  <div className="menuWrapper">
    <img src={Logo} className="logo" />
    <a>News</a>
    <a>Items</a>
    <a>Tips & Tricks</a>
    <div className="profilePictureWrapper">
      <div className="profilePicture"></div>
    </div>
  </div>
);

export default Menu;