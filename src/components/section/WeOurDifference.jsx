import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Banners from './Banners';




const WeOurDifference= () => {

    const BASE_URL = 'https://api.softwarevillage.az/api/core/our-difference';

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
                <div className='homeAbout '>
                    <div className="grid-container we-diffrance">
                      
                        <div className="grid-card">
                            <div className="home-about-content-grid-card">
                                <h4>
                                    {aboutContent?.title}
                                </h4>
                                <p className="home-about-content-desc-name" dangerouslySetInnerHTML={{ __html: aboutContent.text?.slice(0, 500) }} />
                            </div>



                        </div>

                        <div className="grid-card">
                            <div className="home-about-image-grid-card">
                                <img 
                                src= {`https://api.softwarevillage.az${aboutContent.image}`}alt="" />

                                
                                
                            </div>

                        </div>

                    </div>

                </div>

                <Banners />
            </>
        )
    }

export default WeOurDifference

