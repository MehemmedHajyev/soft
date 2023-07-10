import img from '../../assets/img/blog-card-img/img.png'

import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

import axios from 'axios'


const DpageOne = () => {
    
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
    }, [])
    return (
        <div
            className='dpage-one-container'>
            <div className="dpage-one-card">
                <div className="dpage-one-card-content">
                    <h1 className='dpage-one-card-content-title'>{courseDetail?.title}</h1>
                    <p className='dpage-one-card-content-desc' dangerouslySetInnerHTML={{ __html: courseDetail?.description?.slice(0, 500) }}/>
                    
                </div>
            </div>
            <div className="dpage-one-card">
                <img src={`https://api.softwarevillage.az${courseDetail?.image_1}`} alt="" />
            </div>
        </div>
    )
}

export default DpageOne
