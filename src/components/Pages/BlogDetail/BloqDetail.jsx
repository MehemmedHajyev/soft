
import { Link, useParams } from 'react-router-dom'
import img1 from '../../../assets/img/header-imgs/about-bcg.png'
import img2 from '../../../assets/img/home-in-about-img/mobile.png'


import React, { useEffect, useState } from 'react'

import axios from 'axios'

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
            <div className='about-header'>
                <div className="shwadow">
                    <img src={`https://api.softwarevillage.az${data?.image}`}
                        className="header-img" />
                    <div className="shadow-for-img">
                        <div className="mobilePrograming">
                            <h1>{data?.title}</h1>
                        </div>
                        <div className="about-header-come-back-buttons">
                            <p>Ana səhifə /<span>{data?.slug}</span></p>
                        </div>
                    </div>
                </div>

            </div>

            <div className="mobile-programing-container">

                <div className="mobile-programing-card">
                    <div className="mobile-programing-card-content">
                        <h2 dangerouslySetInnerHTML={{ __html: data?.title }} />

                        <p dangerouslySetInnerHTML={{ __html: data?.description?.slice(0, 500) }}/>

                    </div>
                </div>
                <div className="mobile-programing-card">
                    <img src={`https://api.softwarevillage.az${data?.background_image}`}


                        alt="" />
                </div>




            </div>


            <div className="mobile-programing-description">
                <h2 dangerouslySetInnerHTML={{ __html: data?.description_2?.slice(0, 500) }}/> 
                <p dangerouslySetInnerHTML={{ __html: data?.description_3?.slice(0, 500) }} />
            </div>






            <div className="mobile-programing-description add">

            <h2 dangerouslySetInnerHTML={{ __html: data?.description_2?.slice(0, 500) }}/> 



            <p dangerouslySetInnerHTML={{ __html: data?.description_3?.slice(0, 500) }} />

               
            </div>










            <div className="mobile-programing-container">

                <div className="mobile-programing-card">


                    <img src={`https://api.softwarevillage.az${data?.image_2}`}
                    alt="" />
                </div>
                <div className="mobile-programing-card">
                    <div className="mobile-programing-card-content">
                    <h2 dangerouslySetInnerHTML={{ __html: data?.description_2?.slice(0, 500) }}/> 


                        <p dangerouslySetInnerHTML={{ __html: data?.description?.slice(0, 500) }}/>
                    </div>
                </div>




            </div>


            <div className="mobile-programing-description">
                <h2> Mobil proqramlaşdırmada gələcək tendensiyalar nədir?
                </h2>
                <p dangerouslySetInnerHTML={{ __html: data?.description_3?.slice(0, 500) }} />
            </div>





            <div className="mobile-programing-container">


                <div className="mobile-programing-card">
                    <div className="mobile-programing-card-content">
                    <h2 dangerouslySetInnerHTML={{ __html: data?.description_2?.slice(0, 500) }}/> 


                    <p dangerouslySetInnerHTML={{ __html: data?.description_3?.slice(0, 500) }} />
                    </div>
                </div>

                <div className="mobile-programing-card">
                <img src={`https://api.softwarevillage.az${data?.image_2}`}
                    alt="" />
                </div>


            </div>
        </>




    )
}

export default MobilePrograming