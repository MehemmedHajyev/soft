import React from 'react'
import imgAbout from '../../assets/img/home-in-about-img/image.png';
import { Link } from "react-router-dom";
import axios from 'axios'
import { useEffect, useState } from 'react'

const BASE_URL = 'https://api.softwarevillage.az/api/core/home_about';




const HomeAbout = () => {


    // const [HomeAbout, setHomeAbout] = useState({})

    // const getHomeAbout = async () => {
    //     const res = await axios(BASE_URL)
    //     const data = await res.data
    //     setHomeAbout(data)
    // }
    // console.log(HomeAbout,'home-about');

    // useEffect(() => {
    //     setHomeAbout()
    // }, [])

    return (
        <div className='homeAbout'>
            <h3>vrfekvd m</h3>
            <div className="grid-container">
                <div className="grid-card">
                    <div className="home-about-content-grid-card">
                        <h4>fejcwd mscx</h4>
                        <p className="home-about-content-desc-name">
                            Bill Gates (Microsoft'un sahibi)
                        </p>
                        <p className="home-about-content-desc">
                            Software Village StratUp proqramımız sizə proqram
                            təminatı olan BOOTCAMP-ları təklif edir və sizə çoxlu
                            praktiki, layihə əsaslı təlimlərdə iştirak etmək imkanı
                            verir.Bəs BOOTCAMP nədir?BOOTCAMP-ı “öyrənmə
                            marafonu” kimi düşünə bilərsiniz. Siz həm təlim keçə,
                            həm də o sahədə işə başlamaq üçün kifayət qədər bilik
                            və avadanlıq əldə edə bilərsiniz...
                        </p>


                        <Link to="/about">
                            <button className='home-about-content-grid-card-button'>Dəvamını oxu
                                <svg width="19" height="17" viewBox="0 0 19 17" fill="none" xmlns="http://www.w3.org/2000/svg" className='btn-hover-active'>
                                    <path d="M2 8.52404L15.7232 8.38719M10.6182 2L17.1412 8.52298L10.4868 15.1774" stroke="white" stroke-width="2" stroke-linecap="square" stroke-linejoin="round" />
                                </svg>

                            </button>
                        </Link>



                    </div>

                </div>
                <div className="grid-card">
                    <div className="home-about-image-grid-card">
                        <img src={imgAbout} alt="" />
                        {/* <img src={imgTest} alt="" /> */}

                    </div>
                </div>

            </div>
        </div>
    )
}

export default HomeAbout