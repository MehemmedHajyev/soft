
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import axios from 'axios'
import { useCallback } from 'react'

const CorseInformation = () => {

    const { slug } = useParams()
    const BASE_URL = `https://api.softwarevillage.az/api/course/${slug}`;


    const [courseDetail, setCourseDetail] = useState([])

    const getCourseDetail = useCallback(async () => {
        const res = await axios.get(BASE_URL);
        const data = await res.data;
        setCourseDetail(data);
    }, []);
    console.log(courseDetail);

    useEffect(() => {
        getCourseDetail()
    }, [ getCourseDetail])

    return (
        <div className='corse-information-container'>
            <div className="corse-information-card">
                <img src={`https://api.softwarevillage.az${courseDetail?.image_2}`} alt="" />
            </div>


            <div className="corse-information-card">
                <div className="corse-information-card-conten">
                    <h1>{courseDetail?.title} təlimində nə öyrənəcəksiniz?</h1>

                    <ul className="corese-infarmetion">
                        {courseDetail.properties?.map((item, index) => (
                            <li key={index} className='i'>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={23}
                                    height={23}
                                    fill="none"
                                >
                                    <path
                                        fill="#23A6F0"
                                        fillRule="evenodd"
                                        d="M11.5 0C5.158 0 0 5.158 0 11.5 0 17.843 5.158 23 11.5 23 17.843 23 23 17.843 23 11.5 23 5.158 17.843 0 11.5 0Z"
                                        clipRule="evenodd"
                                    />
                                    <path
                                        fill="#fff"
                                        d="m16.53 7.053-6.379 6.072-3.65-3.65-1.747 1.718L9.262 15.7c.245.245.552.368.859.368.306 0 .613-.123.858-.338l7.268-6.9-1.717-1.778Z"
                                    />
                                </svg>
                                {item.name}
                            </li>
                        ))}

                        <button className='corese-infarmetion-btn' href="#" >Muraciyet et</button>
                    </ul>
                </div>



            </div>

        </div>
    )
}

export default CorseInformation