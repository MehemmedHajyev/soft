import React, { useEffect, useState } from 'react'
import axios from 'axios';



const HomeAbout = () => {


    const BASE_URL = 'https://api.softwarevillage.az/api/core/about-us';

    const [aboutContent, setaboutContent] = useState({})

    const getaboutContent = async () => {
        const res = await axios.get(BASE_URL)
        const data = await res.data
        setaboutContent(data)
    }
    // console.log(aboutContent, "aboutcontent");

    useEffect(() => {
        getaboutContent()
    }, [])



    return (
        <div className='homeAbout'>
            <div className="grid-container">
            <div className="grid-card">
                    <div className="home-about-image-grid-card">
                        <img
                         src= {`https://api.softwarevillage.az${aboutContent.image}`}alt="" />

                    </div>
                </div>

                <div className="grid-card">
                    <div className="home-about-content-grid-card">
                        
                        <h4>{aboutContent.title}</h4>
                        <p className="home-about-content-desc-name" dangerouslySetInnerHTML={{ __html: aboutContent.text?.slice(0, 500) }} />
                    
                    </div>

                </div>
              
            </div>
        </div>
    )
}

export default HomeAbout