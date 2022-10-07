import React from 'react';
import Sidebar from '../components/Sidebar';
import '../App.scss';
import BuyNow from '../components/BuyNow';
import Articles from '../components/Articles';
import Hero from '../components/Hero';

const Home = () => {
  return (
    <div className='home'>
        <Sidebar/>
        <div className='main'>
          <section>
            <Hero/>
            <Articles/>
          </section>
          <BuyNow/>
        </div>
    </div>
  )
}

export default Home