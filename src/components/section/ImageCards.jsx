
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import axios from 'axios'


const ImageCards = () => {
    
    const { slug } = useParams()
    const BASE_URL = `https://api.softwarevillage.az/api/course/${slug}`;


    const [courseDetail, setCourseDetail] = useState([])

    const getCourseDetail = async () => {
        const res = await axios(BASE_URL)
        const data = await res.data
        setCourseDetail(data)
    }
    console.log(courseDetail);

    useEffect(() => {
        getCourseDetail()
    }, [ getCourseDetail])
return (
        <>
            <div className="ImageCards-main">
                <h1>Sizi nələr gözləyir?</h1>
                <div className="ImageCards-container">

                    {
                        courseDetail.future_plan?.map((item) => (
                            <div className="ImageCards-container-card">
                                <img src={`https://api.softwarevillage.az${item?.image}`} alt="" />
                                <div className="ImageCards-container-card-hover-content">
                                <p>{item?.title}</p>  

                                </div>
                            </div>  
                        ))
                    }            

                </div>


            </div>

        </>
    )
}

export default ImageCards