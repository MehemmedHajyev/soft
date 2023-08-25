import Nav1 from './Nav/Nav1'
import { Link } from "react-router-dom";
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useRef } from 'react';



const Header = () => {
    // const navRef = useRef();


    // const showNavbar = () => {
    //     navRef.current.classList.toggle(
    //         "responsive_nav"
    //     );
    // };

    const BASE_URL = 'https://api.softwarevillage.az/api/core/main_data';


    const [aboutContent, setaboutContent] = useState({})

    const getaboutContent = async () => {
        const res = await axios(BASE_URL)
        const data = await res.data
        setaboutContent(data)
    }
    // console.log(aboutContent, "aboutcontent");

    useEffect(() => {
        getaboutContent()
    }, [])



    return (
        <>
            <div className='header-bcg'>
                <div className="header-nav-list">
                    <div className="logo">
                        <Link to="/">
                            <img src={`https://api.softwarevillage.az${aboutContent.header_logo}`} alt="Logo" width={293} height={40} />
                            
                        </Link>
                    </div>
                    <Nav1 />
                    <div className="search-buttons" id="for-dekstop">
                    <div className="button-container">

                        <Link to="muraciyyet-et">
                            <button> Müraciət et</button>
                        </Link>


                    </div>
                </div>
                </div>



            </div>



        </>
    )
}

export default Header