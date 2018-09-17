import React from 'react';
import './NewsHomepageItem.css';

const items = [];

const NewsHomepageItem = (props) => {
  const {picture, title, subtitle, bigPicture} = props;
  return (
    <div className="newsHomepageItemWrapper">
      <img src={picture} style={bigPicture ? {width: 711 + 'px', height: 442 + 'px'} : {height: 221 + 'px'}} />
      <div className="textContainer" style={bigPicture ? {height: 139 + 'px'} : {height: 90 + 'px'}}>
        <h2 style={bigPicture ? {fontSize: 24 + 'px', paddingLeft: 50 + 'px'} : {fontSize: 20 + 'px', paddingLeft: 25 + 'px'}}>{title}</h2>
        <h3 style={bigPicture ? {fontSize: 20 + 'px', paddingLeft: 50 + 'px'} : {fontSize: 16 + 'px', paddingLeft: 25 + 'px'}}>{subtitle}</h3>
      </div>
    </div>
  )
}


export default NewsHomepageItem;