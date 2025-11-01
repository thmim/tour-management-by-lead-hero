import ChatbaseWidget from '@/Components/ChatbaseWidget';
import Footer from '@/Components/Footer';
import Navbar from '@/Components/Navbar';
import React from 'react';

const Layout = ({ children }) => {
    return (
        <div>
            <Navbar></Navbar>
           { children } 
             <ChatbaseWidget />
          
           <Footer></Footer>
        </div>
    );
}

export default Layout;
