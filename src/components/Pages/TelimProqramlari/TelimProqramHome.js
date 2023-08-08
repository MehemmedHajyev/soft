import React from 'react'
import BredCramp from '../../section/BredCramp/BredCramp';
                                                                                    
import axios from 'axios'
import { useEffect, useState } from 'react'

const TelimProqramHome = () => {

    const BASE_URL = `https://api.softwarevillage.az/api/core/course-info`;

    const [aboutContent, setaboutContent] = useState({})

    const getaboutContent = async () => {
        const res = await axios(BASE_URL)
        const data = await res.data
        setaboutContent(data)
    }
    console.log(aboutContent, "aboutcontent");

    useEffect(() => {
        getaboutContent()
    }, [])


    return (
        <BredCramp

            title={aboutContent.title}

            inPage={aboutContent?.slug}

            text={aboutContent?.description}
            

            image={`https://api.softwarevillage.az${aboutContent?.image}`
            }

        />)
}

export default TelimProqramHome