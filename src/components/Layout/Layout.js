import React from 'react'
import Header from './Header/Header';
import Footer from './Footer/Footer';
import Footer2 from './Footer/Footer2';

const Layout = (props) => {
    return (
        <>
            <Header />
            {props.children}
            <Footer2 />
        </>
    )
}

export default Layout