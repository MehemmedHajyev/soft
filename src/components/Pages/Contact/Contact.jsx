import AboutConnactionsCart from './AboutConnactionsCart';
import MapForm from './MapForm';
import BredCramp from '../../section/BredCramp/BredCramp'
import axios from 'axios'
import React, { useEffect, useState } from 'react'




const Contact = () => {

  const BASE_URL = 'https://api.softwarevillage.az/api/core/contact-info';


  const [aboutContent, setaboutContent] = useState({})

  const getaboutContent = async () => {
    const res = await axios(BASE_URL)
    const data = await res.data
    setaboutContent(data)
  }
  useEffect(() => {
    getaboutContent()
  }, [])



  return (
    <>
      <BredCramp 
      
      title={aboutContent?.title}  
      inPage={aboutContent?.title}
    
      text={aboutContent?.description} 

      image={`https://api.softwarevillage.az${aboutContent?.image}`
    }       
       />



      <AboutConnactionsCart />
      <MapForm />
    </>

  )
}

export default Contact