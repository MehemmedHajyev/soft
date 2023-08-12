import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';

const HomeAbout = () => {
    const BASE_URL = 'https://api.softwarevillage.az/api/core/home_about';

    const [homeAbout, setHomeAbout] = useState([]);

    const getHomeAbout = async () => {
        try {
            const res = await axios.get(BASE_URL);
            const data = res.data;
            setHomeAbout(data);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    useEffect(() => {
        getHomeAbout();
    }, []);
    return (
        <div className='homeAbout'>
            <h3>{homeAbout?.title}</h3>
            <p className="home-about-description" dangerouslySetInnerHTML={{ __html: homeAbout?.text?.slice(0, 200) }} />
            <div className="grid-container">
                <div className="grid-card">
                    <div className="home-about-image-grid-card">
                        <img src={`https://api.softwarevillage.az${homeAbout?.image}`} alt="" />
                    </div>
                </div>
                <div className="grid-card">
                    <div className="home-about-content-grid-card">
                        <p className="home-about-content-desc" dangerouslySetInnerHTML={{ __html: homeAbout?.text?.slice(0, 5000) }} />
                        <Link to="/haqqimizda">
                            <button className='home-about-content-grid-card-button'>Davamını oxu
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g id="vuesax/linear/arrow-right">
                                        <g id="arrow-right">
                                            <path id="Vector" d="M5.93945 13.2802L10.2861 8.93355C10.7995 8.42021 10.7995 7.58021 10.2861 7.06688L5.93945 2.72021" stroke="white" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                        </g>
                                    </g>
                                </svg>
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeAbout;
