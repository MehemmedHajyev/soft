import React from 'react'
import Carousel from '../Sliders/Carousel'
import axios from 'axios'
import { useEffect, useState } from 'react'
import Link from 'antd/es/typography/Link';
import { useNavigate } from 'react-router-dom';
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
            // console.log(err);
        }


    }
    // console.log(mainSlider, 'testt');

    useEffect(() => {
        getMainSlider()
    }, [])

    const navigate = useNavigate();

    const rout = (() => {
        navigate("/muraciyyet-et");
    })



    return (
        <Carousel className='main-carusel'>
          {mainSlider.map((item, index) => (
  <div key={index} className='carousel-item'>
    <div className='main-carusel-information'>
      <div className='main-carusel-description'>
        <p className="main-carusel-title">
          {item.title}
        </p>
        <div>
          <p className="main-carusel-paragraf">
            {item.text}
          </p>
        </div>
        <div className="main-carusel-button">
          <Link to="muraciyyet-et">
            <button onClick={() => rout()}>
              Müraciət et
            </button>
          </Link>
        </div>
      </div>
      <div className='main-carusel-image'>
        <img src={`https://api.softwarevillage.az${item.image}`} alt={`Image for ${item.title}`} />
      </div>
    </div>
  </div>
))}





        </Carousel>
    )
}

export default MainCarusel