import { useEffect, useState } from 'react'
import axios from 'axios'


export const WhatsappCard = () => {


    const BASE_URL = 'https://api.softwarevillage.az/api/core/wp-numbers'

    const [whatsapp, setwhatsapp] = useState([])

    const getwhatsapp = async () => {
        const res = await axios(BASE_URL)
        const data = await res.data
        setwhatsapp(data)
    }
    console.log(whatsapp, 'about ');

    useEffect(() => {
        getwhatsapp()
        console.log('salam');
    }, [])


    return (
        <div>

            <div className="aboutConnactionsCart">
                <div className="aboutConnactionsCart-content">
                    <div className="aboutConnactionsCart-content-icon">
                        <svg width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M24.0597 19.7752C23.6459 19.569 21.6301 18.5831 21.2547 18.447C20.8794 18.3081 20.6044 18.2407 20.3294 18.6532C20.0585 19.0589 19.2692 19.9788 19.0314 20.251C18.7907 20.5191 18.5515 20.5398 18.1431 20.3541C17.7306 20.1479 16.4065 19.7148 14.839 18.3123C13.618 17.2191 12.7985 15.8785 12.5565 15.466C12.3173 15.0535 12.5304 14.8266 12.7353 14.6204C12.9222 14.4348 13.1491 14.146 13.3554 13.9012C13.5561 13.6524 13.6221 13.4874 13.7638 13.2193C13.9012 12.9305 13.8311 12.7036 13.7294 12.4988C13.6262 12.2925 12.8054 10.2712 12.4616 9.4655C12.1316 8.6625 11.792 8.76425 11.5376 8.76425C11.3011 8.74362 11.0275 8.74363 10.7525 8.74363C10.4775 8.74363 10.0334 8.84538 9.65662 9.23725C9.28125 9.64975 8.21975 10.6397 8.21975 12.6404C8.21975 14.641 9.691 16.5798 9.89587 16.8685C10.1007 17.1366 12.7902 21.2616 16.9084 23.0354C17.8901 23.4479 18.6546 23.6954 19.2514 23.9002C20.2331 24.2124 21.1283 24.1684 21.8364 24.0666C22.6256 23.9415 24.266 23.0752 24.6084 22.1059C24.959 21.1365 24.959 20.3321 24.8559 20.1465C24.7541 19.9609 24.4846 19.8577 24.0721 19.6721M16.5839 29.9062H16.5619C14.1281 29.9062 11.7164 29.2463 9.61125 28.0088L9.11625 27.7145L3.96 29.0551L5.34188 24.0433L5.01325 23.5276C3.652 21.3606 2.92875 18.865 2.92875 16.2951C2.92875 8.80825 9.05437 2.70325 16.599 2.70325C20.2482 2.70325 23.6734 4.12637 26.2529 6.7045C28.831 9.26062 30.2528 12.6858 30.2528 16.3158C30.2473 23.8013 24.1203 29.9076 16.5921 29.9076M28.215 4.74237C25.08 1.71187 20.955 0 16.5619 0C7.51163 0 0.143 7.33425 0.138875 16.3529C0.138875 19.2349 0.89375 22.0454 2.332 24.5272L0 33L8.71062 30.7285C11.1114 32.0251 13.8119 32.714 16.5619 32.7181H16.5701C25.6245 32.7181 32.9959 25.3811 33 16.3611C33 11.9941 31.295 7.88425 28.1944 4.796" fill="#25D366" />
                        </svg>

                    </div>

                    <div className='aboutConnactionsCart-content-desc'>

                        <h4>Whatsapp</h4>

                        {

                            whatsapp?.map((index,item) => (


                                <p key={index}>{item.wp_number}</p>
                            ))
                        }

                    </div>

                </div>
            </div>

        </div>
    )
}
