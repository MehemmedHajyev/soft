import React from 'react'
import BredCramp from '../../section/BredCramp/BredCramp'
import axios from 'axios'
import { useEffect, useState } from 'react'


const QuastionHeader = () => {

    const BASE_URL = 'https://api.softwarevillage.az/api/core/questions-info';

    const [aboutContent, setaboutContent] = useState({})

  const getaboutContent = async () => {
    const res = await axios(BASE_URL)
    const data = await res.data
    setaboutContent(data)
  }
  // console.log(aboutContent, "aboutcontent");

  useEffect(() => {
    getaboutContent()
  }, [])
  
  return (
    <div>


<BredCramp 

title={aboutContent.title}

inPage={aboutContent?.title}

text={aboutContent?.description} 

image={`https://api.softwarevillage.az${aboutContent?.image}`
}

/>

    </div>
  )
}

export default QuastionHeader