

import HomeAbout from '../../section/HomeAbout'
import WeMission from '../../section/WeMission'
import WeOurDifference from '../../section/WeOurDifference'
import WhyWe from '../../section/WhyWe'
import BredCramp from '../../section/BredCramp/BredCramp';
import img1 from '../../../assets/img/header-imgs/about-bcg.png'
import AboutContent from '../../section/AboutContent'
import axios from 'axios'
import { useEffect, useState } from 'react'

// const BASE_URL = 'https://api.softwarevillage.az/api/core/about';

const About = () => {

  // const [aboutContent, setaboutContent] = useState([])
  // const getaboutContent = async () => {
  //   const res = await axios(BASE_URL)
  //   const data = await res.data
  //   setaboutContent(data)
  // }
  // console.log(aboutContent, "aboutcontent");

  // useEffect(() => {
  //   getaboutContent()
  // }, [])


  return (
    <>
      <BredCramp title={'title'} text={'text'} image={'abouimage'} />
      <AboutContent />
      <WeOurDifference />
      <WeMission />
      <WhyWe />


    </>
  )
}

export default About