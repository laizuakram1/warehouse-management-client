import React from 'react';
import { Link } from 'react-router-dom';
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
          <div className='manageInventoryBtn mt-3 mb-3'>
          <Link to='/manageInventory'>Manage Inventory</Link>
          </div>
          <Footer></Footer>
         
        </div>
    );
};

export default Home;
