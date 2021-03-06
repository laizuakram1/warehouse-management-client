import React from 'react';
import { Link } from 'react-router-dom';
import Factory from '../Factory/Factory';
import Footer from '../shared/Footer/Footer';
import Header from '../shared/Header/Header';
import Banner from './Banner/Banner';
import GlobalNetworking from './GlobalNetworking/GlobalNetworking';
import './Home.css';
import Inventory from './Inventory/Inventory';

const Home = () => {
    return (
        <div>
          <Header></Header>
          <Banner></Banner>
          <Inventory></Inventory>
          <GlobalNetworking></GlobalNetworking>
          <Factory></Factory>
          <div className='manageInventoryBtn mt-3 mb-3'>
          <Link to='/manageInventory'>Manage Inventory</Link>
          </div>
          <Footer></Footer>
         
        </div>
    );
};

export default Home;
