import React from 'react'
import imgAbout from '../../assets/img/home-in-about-img/image.png';
import { Link } from "react-router-dom";
import axios from 'axios';



const HomeAbout = () => {


    return (
        <div className='homeAbout'>
            <h3>Haqqımızda</h3>
            <div className="grid-container">
                <div className="grid-card">
                    <div className="home-about-content-grid-card">
                        <h4> Proqramlaşdırma sənətkarlıq və
                            mühəndisliyin gözəl birləşməsidir.</h4>
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