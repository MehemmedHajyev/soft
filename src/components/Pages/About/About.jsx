

import HomeAbout from '../../section/HomeAbout'
import WeMission from '../../section/WeMission'
import WeOurDifference from '../../section/WeOurDifference'
import WhyWe from '../../section/WhyWe'
import BredCramp from '../../section/BredCramp/BredCramp';
import AboutContent from '../../section/AboutContent'
import axios from 'axios'
import { useEffect, useState } from 'react'
import WeTeam from '../../section/WeTeam';
import Partniyorlar from '../../section/Partniyorlar';

const About = () => {

  const BASE_URL = 'https://api.softwarevillage.az/api/core/about-info';

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
      <BredCramp
        title={aboutContent.title}
        inPage={aboutContent?.title}
        text={aboutContent?.description}

        image={`https://api.softwarevillage.az${aboutContent?.image}`
        }

      />
      <AboutContent />
      <WeOurDifference />
      <WeMission />
      <WhyWe />
      <WeTeam />
      <Partniyorlar />




    </>
  )
}

export default About