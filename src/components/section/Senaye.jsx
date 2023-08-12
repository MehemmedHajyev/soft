import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import axios from 'axios'

const Senaye = () => {

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
        <><div className="sanaye-main">
            <h1>    Sənayedə orta qazanc
            </h1>
            <div className='sanaye-container'>
                {
                    courseDetail.profit?.map((item) => (
                        <div className="sanaye-card">
                        <div className="sanaye-card-content">
                            <div className="sanaye-card-content-svg">
                            <img src={`https://api.softwarevillage.az${item?.image}`} />
                            </div>
                            <p className="sanaye-card-content-title">{item?.title}</p>
                            <p className="sanaye-card-content-desc">{item?.description}</p>
                        </div>
                    </div>   
                    ))
                }        
            </div>
        </div>
        </>
    )
}

export default Senaye