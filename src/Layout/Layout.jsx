import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

const Layout = () => {
    return (
        <div className='flex flex-col min-h-screen max-auto'>
            <Navbar></Navbar>
            <main className='flex flex-grow'>
                <Outlet></Outlet>
            </main>
            <Footer></Footer>
        </div>
    );
};

export default Layout;