import axios from 'axios';
import React, { useEffect, useState } from 'react'
const BASE_URL = 'https://api.softwarevillage.az/api/core/staff-text';

const WeTeamTitle = () => {

    const [weTeam, setweTeam] = useState([])

    const getWeTeam = async () => {
        const res = await axios(BASE_URL)
        const data = await res.data
        setweTeam(data)
    }


    useEffect(() => {
        getWeTeam()
    }, [])


    console.log(weTeam, 'staf');
  return (

    <div className='center-mood-title-and-desc'>
    <h1>{weTeam.title}</h1>
    <p>{weTeam.description}</p>

</div>
  )
}

export default WeTeamTitle