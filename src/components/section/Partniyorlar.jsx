import axios from 'axios'
import { useEffect, useState } from 'react';
import PartniyorSlider from '../Sliders/PartniyorSlider';
const BASE_URL = 'https://api.softwarevillage.az/api/core/partners';




const Partniyorlar = () => {
    const [partnyor, setpartnyor] = useState([])

    const getpartnyor = async () => {
        const res = await axios(BASE_URL)
        const data = await res.data
        setpartnyor(data)
    }
    // console.log(partnyor, 'partniyorlar');

    useEffect(() => {
        getpartnyor()
    }, [])




    return (
        <>

            <div className="partniyorlar-title-and-desc">
                <h1>Akademik Partnyorlarımız</h1>
                <p>Qlobal standartlara uyğun tədris imkanları sayəsində tələbələrimizidünyanın istənilən yerində professionallıqlarını sübut edə biləcəkşəkildə hazırlaşdırırıq.</p>
            </div>
            <PartniyorSlider className='partniyorlar-slider-container' data={partnyor}>
                {partnyor.map((item, index) => (
                    <div key={index} className='partniyorlar-slider-item'>
                        <img src={`https://api.softwarevillage.az${item.image}`} alt={item.name} />
                    </div>
                ))}
            </PartniyorSlider>
        </>

    )
}

export default Partniyorlar