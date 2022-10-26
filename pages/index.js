import React from 'react';

// import { Product, FooterBanner, HeroBanner } from '../components';
import FooterBanner from '../components/FooterBanner';
import HeroBanner from '../components/HeroBanner';

const Home = () => {
  return (
    <div>
      {/* <HeroBannerJA /> */}
      <div>
        <HeroBanner />
      </div>
      <div className="products-heading">
        <h2>Best Selling Products</h2>
        <p>Speakers of many variations</p>
      </div>
      <div className="products-container">
        {['Product1', 'Product 2'].map((product) => product)}
      </div>
      <FooterBanner />
      {/* <FooterBanner /> */}
    </div>
  );
};
export default Home;
