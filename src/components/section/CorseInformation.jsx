import img from '../../assets/img/card-img/M3_integrations_all_integrations.png.png'

import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

import axios from 'axios'

const CorseInformation = () => {

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
        <div className='corse-information-container'>
            <div className="corse-information-card">
                <img src={`https://api.softwarevillage.az${courseDetail?.image_2}`} alt="" />
            </div>


            <div className="corse-information-card">
                <div className="corse-information-card-conten">
                    <h1>Kiber təhlükəsizlik
                        təlimində nə öyrənəcəksiniz?</h1>

                    <ul className="corese-infarmetion">
                        <li className='i'><svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g id="Group 37510">
                                <path id="Vector" fill-rule="evenodd" clip-rule="evenodd" d="M11.5 0C5.15752 0 0 5.15783 0 11.5C0 17.8425 5.15752 23 11.5 23C17.8425 23 23 17.8425 23 11.5C23 5.15783 17.8425 0 11.5 0Z" fill="#23A6F0" />
                                <g id="Group">
                                    <path id="Vector_2" d="M16.5299 7.05273L10.1512 13.1247L6.50191 9.4754L4.75391 11.1927L9.26191 15.7007C9.50724 15.9461 9.81391 16.0687 10.1206 16.0687C10.4272 16.0687 10.7339 15.9461 10.9792 15.7314L18.2472 8.8314L16.5299 7.05273Z" fill="white" />
                                </g>
                            </g>
                        </svg>
                            Lorem ipsum
                        </li>



                        <li className='i'><svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g id="Group 37510">
                                <path id="Vector" fill-rule="evenodd" clip-rule="evenodd" d="M11.5 0C5.15752 0 0 5.15783 0 11.5C0 17.8425 5.15752 23 11.5 23C17.8425 23 23 17.8425 23 11.5C23 5.15783 17.8425 0 11.5 0Z" fill="#23A6F0" />
                                <g id="Group">
                                    <path id="Vector_2" d="M16.5299 7.05273L10.1512 13.1247L6.50191 9.4754L4.75391 11.1927L9.26191 15.7007C9.50724 15.9461 9.81391 16.0687 10.1206 16.0687C10.4272 16.0687 10.7339 15.9461 10.9792 15.7314L18.2472 8.8314L16.5299 7.05273Z" fill="white" />
                                </g>
                            </g>
                        </svg>
                            Lorem ipsum
                        </li>
                        <li className='i'><svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g id="Group 37510">
                                <path id="Vector" fill-rule="evenodd" clip-rule="evenodd" d="M11.5 0C5.15752 0 0 5.15783 0 11.5C0 17.8425 5.15752 23 11.5 23C17.8425 23 23 17.8425 23 11.5C23 5.15783 17.8425 0 11.5 0Z" fill="#23A6F0" />
                                <g id="Group">
                                    <path id="Vector_2" d="M16.5299 7.05273L10.1512 13.1247L6.50191 9.4754L4.75391 11.1927L9.26191 15.7007C9.50724 15.9461 9.81391 16.0687 10.1206 16.0687C10.4272 16.0687 10.7339 15.9461 10.9792 15.7314L18.2472 8.8314L16.5299 7.05273Z" fill="white" />
                                </g>
                            </g>
                        </svg>
                            Lorem ipsum
                        </li>
                        <li className='i'><svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g id="Group 37510">
                                <path id="Vector" fill-rule="evenodd" clip-rule="evenodd" d="M11.5 0C5.15752 0 0 5.15783 0 11.5C0 17.8425 5.15752 23 11.5 23C17.8425 23 23 17.8425 23 11.5C23 5.15783 17.8425 0 11.5 0Z" fill="#23A6F0" />
                                <g id="Group">
                                    <path id="Vector_2" d="M16.5299 7.05273L10.1512 13.1247L6.50191 9.4754L4.75391 11.1927L9.26191 15.7007C9.50724 15.9461 9.81391 16.0687 10.1206 16.0687C10.4272 16.0687 10.7339 15.9461 10.9792 15.7314L18.2472 8.8314L16.5299 7.05273Z" fill="white" />
                                </g>
                            </g>
                        </svg>
                            Lorem ipsum
                        </li>
                        <li className='i'><svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g id="Group 37510">
                                <path id="Vector" fill-rule="evenodd" clip-rule="evenodd" d="M11.5 0C5.15752 0 0 5.15783 0 11.5C0 17.8425 5.15752 23 11.5 23C17.8425 23 23 17.8425 23 11.5C23 5.15783 17.8425 0 11.5 0Z" fill="#23A6F0" />
                                <g id="Group">
                                    <path id="Vector_2" d="M16.5299 7.05273L10.1512 13.1247L6.50191 9.4754L4.75391 11.1927L9.26191 15.7007C9.50724 15.9461 9.81391 16.0687 10.1206 16.0687C10.4272 16.0687 10.7339 15.9461 10.9792 15.7314L18.2472 8.8314L16.5299 7.05273Z" fill="white" />
                                </g>
                            </g>
                        </svg>
                            Lorem ipsum
                        </li>
                        <button className='corese-infarmetion-btn' href="#" >Muraciyet et</button>
                    </ul>
                </div>



            </div>

        </div>
    )
}

export default CorseInformation