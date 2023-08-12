import React from 'react'
import CenterMoodSlider from '../Sliders/CenterMoodSlider'
import axios from 'axios'
import { useEffect, useState } from 'react'
import WeTeamTitle from './WeTeamTitle'

const BASE_URL = 'https://api.softwarevillage.az/api/core/staff';

const WeTeam = () => {


    const [weTeam, setweTeam] = useState([])

    const getWeTeam = async () => {
        const res = await axios(BASE_URL)
        const data = await res.data
        setweTeam(data)
    }


    useEffect(() => {
        getWeTeam()
    }, [])


    console.log(weTeam, 'staf');

    return (
        <>

<WeTeamTitle />
           
            <CenterMoodSlider className="center-mood-slider">

                {/* {
                    weTeam.map((item) => (
                        <div className='item'>
                            <div>
                                <div className="item-inner-images">
                                    <img src={`https://api.softwarevillage.az${item?.image}`}                                        alt="" />
                                </div>
                            </div>

                            <div className="center-mood-slider-icons">
                                {
                                    item.social.map((socialNet) => (
                                        <>
                                        <a href={socialNet.social_link}>
                                              <div className='icnss' dangerouslySetInnerHTML={{ __html:socialNet.social_image}}/>
                                        </a>
                                        </>
                                    ))
                                }


                              

                            </div>

                            <div className='center-mood-slider-information'>
                                <h1>{item.title}</h1>
                                <p>{item.position}</p>
                            </div>


                        </div>
                    ))

                } */}
                {weTeam.map((item, index) => (
  <div key={index} className='item'>
    <div>
      <div className="item-inner-images">
        <img src={`https://api.softwarevillage.az${item?.image}`} alt={`Image for ${item?.title}`} />
      </div>
    </div>

    <div className="center-mood-slider-icons">
      {item.social.map((socialNet, socialIndex) => (
        <a key={socialIndex} href={socialNet.social_link}>
          <div className='icnss' dangerouslySetInnerHTML={{ __html: socialNet.social_image }} />
        </a>
      ))}
    </div>

    <div className='center-mood-slider-information'>
      <h1>{item.title}</h1>
      <p>{item.position}</p>
    </div>
  </div>
))}
















            </CenterMoodSlider>
        </>

    )
}

export default WeTeam