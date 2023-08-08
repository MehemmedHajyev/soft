import React from 'react';

import img1 from '../../../assets/img/header-imgs/about-bcg.png'
import BloqContent from '../../section/blog-content/BloqContent';
import BredCramp from '../../section/BredCramp/BredCramp'

import axios from 'axios'
import { useEffect, useState } from 'react'
import Partniyorlar from '../../section/Partniyorlar';


const Bloq = () => {

  const BASE_URL = 'https://api.softwarevillage.az/api/core/blogs-info'



  const [aboutContent, setaboutContent] = useState({})

  const getaboutContent = async () => {
    const res = await axios(BASE_URL)
    const data = await res.data
    setaboutContent(data)
  }
  console.log(aboutContent, "aboutcontent");

  useEffect(() => {
    getaboutContent()
  }, [])


  return (
    <>
      <BredCramp title={aboutContent.title}
       inPage={aboutContent?.title}
       text={aboutContent?.description} 

       image={`https://api.softwarevillage.az${aboutContent?.image}`}

     />


      
      <BloqContent />
      <Partniyorlar />
    </>

  )
}

export default Bloq