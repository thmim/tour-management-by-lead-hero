import Footer from '@/Components/Footer';
import Navbar from '@/Components/Navbar';
import React from 'react';

const Layout = ({ children }) => {
    return (
        <div>
            <Navbar></Navbar>
           { children } 
           <Footer></Footer>
        </div>
    );
}

export default Layout;
