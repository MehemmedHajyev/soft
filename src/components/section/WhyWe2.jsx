import axios from 'axios'
import { useEffect, useState } from 'react'
const BASE_URL = 'https://api.softwarevillage.az/api/core/why_us';



const WhyWe2 = () => {
    const [whyWe, setwhyWe] = useState([])

    const getWhyWe = async () => {
        const res = await axios(BASE_URL)
        const data = await res.data
        setwhyWe(data)
    }
    // console.log(whyWe,'whyWe ');

    useEffect(() => {
        getWhyWe()
    }, [])


    return (
        <div className="why-we-container-main">
            <div className='why-we-container'>
                {
                    whyWe.map((index,item) => (
                        <div key={index} className="why-we-item-content">
                            <div className="why-we-item-icon">
                                <img src={`https://api.softwarevillage.az${item.image}`} alt="" />
                            </div>
                            <h2>{item.title}</h2>
                            <p>{item.description}</p>
                        </div>
                    ))
                }
            </div>
        </div>

    )
}

export default WhyWe2