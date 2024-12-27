import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../ContractForm/Navbar';
import Footer from '../ContractForm/Footer';

const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>

        </div>
    );
};

export default Main;