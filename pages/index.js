import React from 'react';

import { client } from '../lib/client';
import { HeroBanner, FooterBanner } from '../components';

const Home = ({ products, bannerData }) => {
  return (
    <>
      <HeroBanner />
      {console.log(bannerData)}
      <div>
        <div className="products-heading">
          <h2>Best Selling Products</h2>
          <p>Speakers of many variations</p>
        </div>
        <div className="products-container">
          {products?.map((product) => product.name)}
        </div>
      </div>
      <FooterBanner />
    </>
  );
};

export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);
  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerquery);

  return {
    props: { products, bannerData },
  };
};

export default Home;
