import React, {useEffect, useState} from 'react'
import Training from '../../section/Training'
import WhyWe from '../../section/WhyWe'
import DinamikHeader from './DinamikHeader/DinamikHeader'
import DinamikINfarmation from './DinamikINfarmation/DinamikINfarmation'
import IsElanlari from './IsElanlari/IsElanlari'
import Sillabus from './Sillabus/Sillabus'
import { useParams} from 'react-router-dom'
import Money from './money/money'
import axios from 'axios';
import Teaching from './Teaching/Teaching'
 
const DinamicCorse = () => {

  const { slug } = useParams();
  const [data, setData] = useState([]);

  const getData = async () => {

    // front-end-uzr-bootcamp
    await axios.get(`https://api.softwarevillage.az/api/course/${slug}`)
    .then((res) => {
      setData(res?.data)
      // console.log(res?.data)
    }).catch((err) => {

    })
  }
  // console.log(data.teacher);
  
  useEffect(() => {
    
    getData();
  }, [ getData])

  return (
    <div className='dinamik-container'>

      <DinamikHeader data={data} />
      <DinamikINfarmation data={data} />
      <Sillabus data={data} />
      <Teaching data={data}  />

      {/* additionals */}
      <div style={{display: "flex", justifyContent: 'space-around', padding: "3rem", background:'#222B45'}}>
        {data?.additionals?.map((d, i) => (
          <div key={i}>
            <img className='icon-in-image' src={`https://api.softwarevillage.az${d?.image}`} alt="" />
            <p className='clrr'>{d?.name}</p>
          </div>
        ))}
      </div>
      {/* end-additionals */}

      <WhyWe className='sillabus-in-why-we'/>
      <IsElanlari data={data} />
      <Money data={data} />

      <Training traningText={'Digər Kurslar'} />

    </div>
  )
}

export default DinamicCorse