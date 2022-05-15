import React from 'react';
import Footer from '../shared/Footer/Footer';
import Header from '../shared/Header/Header';
import Banner from './Banner/Banner';
import './Home.css';
import Inventory from './Inventory/Inventory';

const Home = () => {
    return (
        <div>
          <Header></Header>
          <Banner></Banner>
          <Inventory></Inventory>
          <Footer></Footer>
        </div>
    );
};

export default Home;
