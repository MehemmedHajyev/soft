import { useEffect, useState } from 'react'
import axios from 'axios';
import img1 from '../../../assets/img/header-imgs/about-bcg.png'
import BredCrampDinamic from '../../section/BredCrampDinamic/BredCrampDinamic'
import Training from '../../section/Training';
import Sanaye from '../../section/Senaye';
import ImageCards from '../../section/ImageCards';
import DpageOne from '../../section/DpageOne';
import CorseInformation from '../../section/CorseInformation';
import CorseTime from '../../section/CorseTime';
import CorseEducetion from '../../section/CorseEducetion';

const Corse = (traningText) => {
  const BASE_URL = 'https://api.softwarevillage.az/api/core/course-info'

  const [corseContent, setCorseContent] = useState([])

  const getcorseContent = async () => {
      const res = await axios(BASE_URL)
      const data = await res.data
      setCorseContent(data)
  }
  console.log(corseContent, 'corseContent ');

  useEffect(() => {
    getcorseContent()
      console.log('salam');
  }, [])

  

  return (
    <div>
      <BredCrampDinamic title={corseContent.title} 
      image={`https://api.softwarevillage.az${corseContent.image}`} 
      inPage={corseContent.description} />



      <DpageOne />
      <CorseInformation />
      <CorseTime />
      <CorseEducetion />
      <ImageCards />
      <Sanaye />
      <Training traningText={'Digər kurslar'} />
    </div>
  )
}

export default Corse