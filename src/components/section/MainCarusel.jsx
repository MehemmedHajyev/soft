import React from 'react'
import Carousel from '../Sliders/Carousel'
import axios from 'axios'
import { useEffect, useState } from 'react'
const BASE_URL = 'https://api.softwarevillage.az/api/core/slider';






const MainCarusel = () => {

    const [mainSlider, setmainSlider] = useState([])

    const getMainSlider = async () => {

        try {
            const res = await axios.get(BASE_URL)
            const data = await res.data
            setmainSlider(data)

            // Work with the response...
        } catch (err) {
            // Handle error
            console.log(err);
        }
        
      
    }
    console.log(mainSlider,'testt');

    useEffect(() => {
        getMainSlider()
    }, [])
    return (
        <Carousel className='main-carusel'>
            {mainSlider.map((item) => (
                <div className='carousel-item'>
                    <div className='main-carusel-information'>
                        <div className='main-carusel-description'>
                            <p className="main-carusel-title">
                                {/* Xəyalındakı <span>texnoloji</span>
                                kariyeran üçün hərəkətə keç! */}
                                {item.title}
                            </p>
                            <div>
                                <p className="main-carusel-paragraf">
                                    {item.text}
                                </p>
                            </div>
                            <div className="main-carusel-button">
                                <button href={item.button_link}>{item.button_text}</button>
                            </div>
                        </div>
                        <div className='main-carusel-image'>
                            <img src={`https://api.softwarevillage.az${item.image}`} alt="" />


                        </div>

                    </div>

                </div>
            ))}





        </Carousel>
    )
}

export default MainCarusel