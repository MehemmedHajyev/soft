import React, { useEffect, useState } from 'react';
import TeamSlider from '../Sliders/TeamSlider';
import img from '../../assets/img/slider-right-img/img2.png'
import axios from 'axios';
const BASE_URL = 'https://api.softwarevillage.az/api/core/students'

const TeamSliderItems = () => {
    const [students, setStudents] = useState([])
    const getStudents = async () => {
        const res = await axios.get(BASE_URL)
        const data = await res.data
        setStudents(data)
    }
    console.log({students});
    useEffect(() => {
        getStudents()
    }, [])

    return (
        <>
            <h1 className='team-slider-title'>Bizdən təhsil almış kurs iştirakçılarımız</h1>
            <TeamSlider className='team-slider' >

                {
                    students.map((student) => (
                        <div className='item'>
                            <div className="svg">
                                <svg width="33" height="23" viewBox="0 0 33 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7.2445 8.36364C8.67081 8.36364 10.0651 8.79284 11.251 9.59697C12.437 10.4011 13.3613 11.544 13.9071 12.8813C14.4529 14.2185 14.5957 15.6899 14.3175 17.1095C14.0392 18.5291 13.3524 19.8331 12.3438 20.8566C11.3353 21.88 10.0503 22.577 8.65141 22.8594C7.2525 23.1418 5.80251 22.9968 4.48477 22.4429C3.16703 21.889 2.04074 20.951 1.24833 19.7476C0.455916 18.5441 0.032967 17.1292 0.032967 15.6818L0 14.6364C0 10.7546 1.51957 7.03174 4.22442 4.28689C6.92927 1.54204 10.5978 0 14.4231 0V4.18182C13.0696 4.17813 11.7288 4.44676 10.4782 4.97218C9.22767 5.4976 8.09216 6.26938 7.13736 7.24291C6.76627 7.61878 6.42393 8.0228 6.11332 8.45145C6.48214 8.39291 6.8592 8.36154 7.24244 8.36154L7.2445 8.36364ZM25.7885 8.36364C27.2148 8.36364 28.609 8.79284 29.795 9.59697C30.9809 10.4011 31.9052 11.544 32.451 12.8813C32.9969 14.2185 33.1397 15.6899 32.8614 17.1095C32.5832 18.5291 31.8963 19.8331 30.8878 20.8566C29.8792 21.88 28.5943 22.577 27.1954 22.8594C25.7965 23.1418 24.3465 22.9968 23.0287 22.4429C21.711 21.889 20.5847 20.951 19.7923 19.7476C18.9999 18.5441 18.5769 17.1292 18.5769 15.6818L18.544 14.6364C18.544 10.7546 20.0635 7.03174 22.7684 4.28689C25.4732 1.54204 29.1418 0 32.967 0V4.18182C31.6135 4.17813 30.2727 4.44676 29.0222 4.97218C27.7716 5.4976 26.6361 6.26938 25.6813 7.24291C25.3102 7.61878 24.9679 8.0228 24.6573 8.45145C25.0261 8.39291 25.4032 8.36154 25.7885 8.36154V8.36364Z" fill="black" fill-opacity="0.8" />
                            </svg>

                                <div className="content-img">
                                    <p>{student.text}</p>
                                    <div className='user-img'>
                                        <img src=
                                        {`https://api.softwarevillage.az${student.image}`}
                                          alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }

            </TeamSlider>
            <p className="description-teamslider-bootom">
                Bloq
            </p>
        </>

    )
}

export default TeamSliderItems