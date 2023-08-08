
import { Link, useParams } from 'react-router-dom'
import img1 from '../../../assets/img/header-imgs/about-bcg.png'
import img2 from '../../../assets/img/home-in-about-img/mobile.png'


import React, { useEffect, useState } from 'react'

import axios from 'axios'
import BredCramp from '../../section/BredCramp/BredCramp'
import BlogDetailsBredCramp from './BlogDetailsBredCramp'

const MobilePrograming = () => {

    const { slug } = useParams()
    const [data, setData] = useState({})

    const getData = async () => {
        await axios.get(`https://api.softwarevillage.az/api/blogs/${slug}`)
            .then((res) => {
                setData(res?.data)
            }).catch(() => {

            })

    }

    useEffect(() => {
        getData()
        console.log(slug)
    }, []);

    return (
        <>
            <BlogDetailsBredCramp
                image={`https://api.softwarevillage.az${data?.image}`}
                title={data?.title}
                inPage={data?.slug} />


            <div className="mobile-programing-container">
                {data?.items?.map((item, index) => {
                    if (index % 2 === 1) {
                         return <div key={item.id} className="mobile-programing-card-item">
                            <div className="mobile-programing-card-content">
                                <h2 dangerouslySetInnerHTML={{ __html: item.title }} />
                                <p dangerouslySetInnerHTML={{ __html: item.description?.slice(0, 500) }} />
                            </div>
                            <div key={item.id} className="mobile-programing-card">
                                <img
                                    src={`https://api.softwarevillage.az${item.image}`}
                                    alt=""
                                />



                            </div>
                        </div>;
                    } else {
                        return <div key={item.id} className="mobile-programing-card-item">
                            <div key={item.id} className="mobile-programing-card-img">
                                <img
                                    src={`https://api.softwarevillage.az${item.image}`}
                                    alt=""
                                />
                            </div>

                            <div className="mobile-programing-card-content">
                                <h2 dangerouslySetInnerHTML={{ __html: item.title }} />
                                <p dangerouslySetInnerHTML={{ __html: item.description?.slice(0, 500) }} />
                            </div>
                        </div>;
                    }
                })}
            </div>


        </>




    )
}

export default MobilePrograming