import axios from 'axios'
import { useEffect, useState } from 'react';
import PartniyorSlider from '../Sliders/PartniyorSlider';
import Img from '../../assets/img/partniyorlar/digital_marketing_institute.jpeg'

const BASE_URL = 'https://api.softwarevillage.az/api/core/partners';




const Partniyorlar = () => {
    const [partnyor, setpartnyor] = useState([])

    const getpartnyor = async () => {
        const res = await axios(BASE_URL)
        const data = await res.data
        setpartnyor(data)
    }
    console.log(partnyor, 'partniyorlar');

    useEffect(() => {
        getpartnyor()
    }, [])




    return (
        <PartniyorSlider className='partniyorlar-slider-container' >
            {
                partnyor.map((item) => (
                    <div className='partniyorlar-slider-item'>
                        <img src={`https://api.softwarevillage.az${item.image}`} alt={item.name} />
                    </div>
                ))

            }

        </PartniyorSlider>
    )
}

export default Partniyorlar