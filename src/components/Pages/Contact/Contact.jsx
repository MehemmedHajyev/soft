import img from '../../../assets/img/header-imgs/about-bcg.png';
import AboutConnactionsCart from './AboutConnactionsCart';
import MapForm from './MapForm';
import BredCramp from '../../section/BredCramp/BredCramp'
import axios from 'axios'
import React, { useEffect ,useState} from 'react'



const Contact = () => {  
  return (
    <>
      <BredCramp title={'title'} text="text"  image={img}/>
      <AboutConnactionsCart />
      <MapForm />
    </>

  )
}

export default Contact