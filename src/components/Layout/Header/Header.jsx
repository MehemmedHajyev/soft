import React from 'react';
import Logo from '../../../assets/img/Logo/logo.png';
import Nav1 from './Nav/Nav1'
import { Link } from "react-router-dom";



const Header = () => {
    return (
        <>
            <div className='header-bcg'>
                <div className="header-nav-list">
                    <div className="logo">
                    <Link to="/">
                    <img src={Logo} alt="Logo" width={293} height={40} />

                    </Link>
                    </div>
                    <Nav1 />
                </div>



            </div>



        </>
    )
}

export default Header