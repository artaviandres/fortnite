import React from 'react';
import ImgContainer from '../ImgContainer/ImgContainer';
import GliderPicture from '../../assets/Glider.png';
import ArrowLeft from '../../assets/arrowleft.png';
import ArrowRight from '../../assets/arrowright.png';
import './Gliders.css';

const gliders = [
  {
    title: 'Lorem Ipsum',
    price: 2000,
    picture: GliderPicture,
  },
  {
    title: 'Lorem Ipsum',
    price: 2000,
    picture: GliderPicture,
  },
  {
    title: 'Lorem Ipsum',
    price: 2000,
    picture: GliderPicture,
  },
  {
    title: 'Lorem Ipsum',
    price: 2000,
    picture: GliderPicture,
  },
  {
    title: 'Lorem Ipsum',
    price: 2000,
    picture: GliderPicture,
  },
];

const renderGliders = () => {
  return gliders.map(item => {
    return <ImgContainer title={item.title} price={item.price} picture={item.picture} />
  })
}

const Gliders = () => (
  <React.Fragment>
    <div className="glidersWrapper">
      {renderGliders()}
    </div>
    <div className="arrowsWrapper">
      <div className="arrow">
        <img src={ArrowLeft} />
      </div>
      <div className="arrow">
        <img src={ArrowRight} />
      </div>
    </div>
  </React.Fragment>
);

export default Gliders;