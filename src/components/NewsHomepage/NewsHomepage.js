import React from 'react';
import NewsHomepageItem from '../NewsHomepageItem/NewsHomepageItem';

import News1 from '../../assets/news1.png';
import News2 from '../../assets/news2.png';
import News3 from '../../assets/news3.png';
import './NewsHomepage.css';

const NewsHomepage = (props) => {
  return (
    <div className="newsHomepageWrapper">
      <div className="leftSection">
        <NewsHomepageItem picture={News1} title="Lorem Ipsum dolor sit." subtitle="Lorem Ipsum dolor sit." bigPicture />
      </div>
      <div className="rightSection">
        <div className="first">
          <NewsHomepageItem picture={News2} title="Lorem Ipsum dolor sit." subtitle="Lorem Ipsum dolor sit." />
        </div>
        <div className="second">
          <NewsHomepageItem picture={News3} title="Lorem Ipsum dolor sit." subtitle="Lorem Ipsum dolor sit." />
        </div>
      </div>
    </div>
  )
}


export default NewsHomepage;