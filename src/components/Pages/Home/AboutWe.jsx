import axios from 'axios'
import { useEffect, useState } from 'react'

const BASE_URL = 'https://api.softwarevillage.az/api/core/home_digits';


const AboutWe = () => {


    const [digit, setdigit] = useState([])

    const getdigit = async () => {
        const res = await axios(BASE_URL)
        const data = await res.data
        setdigit(data)
    }
    console.log(digit);

    useEffect(() => {
        getdigit()
    }, [])

    return (
        <div className='about-we-home'>
            <div className="about-we-home-content">

                {
                    digit.map((item)=>(
                        <div>
                        <p className="about-we-home-count">
                            {item.number}
                        </p>
                        <p className="about-we-home-desc">{item.title}</p>
                    </div>
                    ))
                }
          


            



            </div>

        </div>
    )
}

export default AboutWe