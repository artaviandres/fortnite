import React from 'react';
import './ImgContainer.css';

import VBucks from '../../assets/vbucks.png';
import InfoButton from '../../assets/infoButton.png';

const Glider = (props) => {
  const {title, price, picture} = props;
  return (
    <div className="gliderWrapper">
      <img src={picture} />
      <div className="info">
        <div className="titleAndPrice">
          <h2>{title}</h2>
          <div className="priceWrapper">
            <img src={VBucks} />
            <p>{price}</p>
          </div>
        </div>
        <div className="infoButton">
          <img src={InfoButton} />
        </div>
      </div>
    </div>
  )
}


export default Glider;