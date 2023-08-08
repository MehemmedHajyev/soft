import React, {useEffect, useState} from 'react'
import CorseTime from '../../section/CorseTime'
import Training from '../../section/Training'
import WhyWe from '../../section/WhyWe'
import DinamikHeader from './DinamikHeader/DinamikHeader'
import DinamikINfarmation from './DinamikINfarmation/DinamikINfarmation'
import IsElanlari from './IsElanlari/IsElanlari'
import Money from './money/Money'
import Sillabus from './Sillabus/Sillabus'
import { Link, useParams, useNavigate} from 'react-router-dom'
import axios from 'axios';
 
const DinamicCorse = () => {

  const { slug } = useParams();
  const [data, setData] = useState([]);

  const getData = async () => {

    // front-end-uzr-bootcamp
    await axios.get(`https://api.softwarevillage.az/api/course/${slug}`)
    .then((res) => {
      setData(res?.data)
      console.log(res?.data)
    }).catch((err) => {

    })
  }
  
  useEffect(() => {
    console.log(slug)
    getData();
  }, [])

  return (
    <div className='dinamik-container'>

      <DinamikHeader data={data} />
      <DinamikINfarmation data={data} />
      <Sillabus data={data} />

      {/* additionals */}
      <div style={{display: "flex", justifyContent: 'space-between', padding: "3rem"}}>
        {data?.additionals?.map((d, i) => (
          <div key={i}>
            <img src={`https://api.softwarevillage.az${d?.image}`} alt="" />
            <p>{d?.name}</p>
          </div>
        ))}
      </div>
      {/* end-additionals */}

      <WhyWe className='sillabus-in-why-we'/>
      <Money data={data} />

      <Training traningText={'Digər Kurslar'} />

    </div>
  )
}

export default DinamicCorse