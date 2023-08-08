import React, { useEffect } from 'react'
import img from '../../assets/img/blog-card-img/img.png';
import { useState } from 'react';
import axios from 'axios';
import Link from 'antd/es/typography/Link';
const BASE_URL = 'https://api.softwarevillage.az/api/core/personal-programs'


const Banners = () => {
    const [training, setTraining] = useState([])

    const getTraining = async () => {
        const res = await axios.get(BASE_URL)
        const data = await res.data
        setTraining(data)
    }
    useEffect(() => {
        getTraining()
    }, [])

    return (
        <div>
            <div className="banners-container">
                {
                    training.map((item) => (
                        <div className="banner-card">
                            <img src={img} alt="" />
                            <div className="banner-img-shadow">
                                <h1>{item.title}</h1>
                                <p>{item.text}</p>
                                <a href="muraciyyet-et">
                                <button>Müraciət et</button>
                                </a>

                            </div>

                        </div>
                    ))
                }





            </div>
        </div>
    )
}

export default Banners