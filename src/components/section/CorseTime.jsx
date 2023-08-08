import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

import axios from 'axios'
import Item from 'antd/es/list/Item'

const CorseTime = () => {

    const { slug } = useParams()
    // const BASE_URL = `https://api.softwarevillage.az/api/course/${slug}`;
    const BASE_URL = `https://api.softwarevillage.az/api/course`;


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
        <div className="corse-time-main">
            <div className='corse-time'>
            {courseDetail.additionals?.map((item) => (
                <div className="corse-time-icon">
                <div className="corse-time-content">
                    <div className="corse-time-svg">
                   

                    {/* <img src={`https://api.softwarevillage.az${item?.image}`} alt="" /> */}

                    </div>
                    <div className="corse-time-title">
                        {item?.name}
                    </div>
                    <div className="corse-time-title">
                        {item?.value}
                    </div>
                </div>

            </div>
            ))}
        </div>
        </div>
        
      
    )
}

export default CorseTime