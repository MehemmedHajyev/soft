import axios from 'axios'
import React, { useEffect, useState } from 'react'

const BASE_URL = 'https://api.softwarevillage.az/api/core/students-text'
const TeamSliderText = () => {

    // 
    const [students, setStudents] = useState([])
    const getStudents = async () => {
        const res = await axios.get(BASE_URL)
        const data = await res.data
        setStudents(data)
    }
    useEffect(() => {
        getStudents()
    }, [])
    return (
        <>
            <h1 className='team-slider-title'>{students.title}</h1>

        </>
    )
}

export default TeamSliderText