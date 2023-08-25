import React, { useEffect, useState } from 'react'
import axios from 'axios';
const BASE_URL = 'https://api.softwarevillage.az/api/core/our-missions'

const WeMission = () => {
    const [missions, setMissions] = useState({})

    const getMissons = async () => {
        const res = await axios.get(BASE_URL)
        const data = await res.data
        setMissions(data)
    }
    // console.log(missions,'missions');

    useEffect(() => {
        getMissons()
    }, [])

    return (
        <div>
            <div className='homeAbout'>
                <h3>{missions.title}</h3>
                <div className="grid-container">
                <div className="grid-card">
                        <div className="">
                            <img src={`https://api.softwarevillage.az${missions.image}`} alt="" />

                        </div>
                    </div>

                    <div className="grid-card">
                        <div className="home-about-content-grid-card">

                            <p className="home-about-content-desc">
                               {missions.text}
                            </p>
                        </div>
                    </div>
                  

                </div>
            </div>
        </div>
    )
}

export default WeMission