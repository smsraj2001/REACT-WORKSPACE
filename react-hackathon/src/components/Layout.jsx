import React from 'react';
import Navbar from './Navbar';
import FooterComponent from './FooterComponent';
import HeaderComponent from './HeaderComponent';

const Layout = ({ children }) => {
    return (
        <div>
            <HeaderComponent />
            <Navbar />
            <div className="main-content">
                {children}
            </div>
            <FooterComponent />
        </div>
    );
};

export default Layout;
