import React from 'react'
import imgAbout from '../../assets/img/home-in-about-img/image.png';
import { Link } from "react-router-dom";
import axios from 'axios'
import { useEffect, useState } from 'react'

const BASE_URL = 'https://api.softwarevillage.az/api/core/home_about';




const HomeAbout = () => {
    
    const BASE_URL = `https://api.softwarevillage.az/api/core/home_about`;


    const [homeAbout, sethomeAbout] = useState([])

    const gethomeAbout = async () => {
        const res = await axios(BASE_URL)
        const data = await res.data
        sethomeAbout(data)
    }
    console.log(homeAbout);

    useEffect(() => {
        gethomeAbout()
    }, [])
    return (
        <div className='homeAbout'>
            <h3>{homeAbout?.items?.title}</h3>
            <div className="grid-container">
                <div className="grid-card">
                    <div className="home-about-content-grid-card">
                        <h4>{homeAbout?.items?.title}</h4>
                        <p className="home-about-content-desc" dangerouslySetInnerHTML={{ __html: homeAbout?.items?.text?.slice(0, 5000) }}/>
                        <Link to="/haqqimizda">
                            <button className='home-about-content-grid-card-button'>Davamını oxu
                                <svg width="19" height="17" viewBox="0 0 19 17" fill="none" xmlns="http://www.w3.org/2000/svg" className='btn-hover-active'>
                                    <path d="M2 8.52404L15.7232 8.38719M10.6182 2L17.1412 8.52298L10.4868 15.1774" stroke="white" stroke-width="2" stroke-linecap="square" stroke-linejoin="round" />
                                </svg>
                            </button>
                        </Link>
                    </div>

                </div>
                <div className="grid-card">
                    <div className="home-about-image-grid-card">
                        <img src={`https://api.softwarevillage.az${homeAbout?.items?.image}`} alt="" />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default HomeAbout