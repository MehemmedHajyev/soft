import { useEffect, useState } from 'react'
import axios from 'axios'


export const Email = () => {


    const BASE_URL = 'https://api.softwarevillage.az/api/core/emails'

    const [email, setemail] = useState([])

    const getemail = async () => {
        const res = await axios(BASE_URL)
        const data = await res.data
        setemail(data)
    }
    // console.log(email, 'about ');

    useEffect(() => {
        getemail()
    }, [])

    
    return (
        <div>
            <div className="aboutConnactionsCart">
                <div className="aboutConnactionsCart-content">
                    <div className="aboutConnactionsCart-content-icon">
                        <svg width="35" height="26" viewBox="0 0 35 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M29.4032 26H5.41456C3.97893 25.9981 2.60265 25.4269 1.5876 24.4117C0.572546 23.3964 0.00160225 22.0201 0 20.5844V5.41456C0.00160276 3.97902 0.572579 2.60274 1.58766 1.58766C2.60274 0.572579 3.97902 0.00160276 5.41456 0H29.4032C30.8388 0.00160225 32.2152 0.572546 33.2304 1.5876C34.2457 2.60265 34.8169 3.97893 34.8187 5.41456V20.5844C34.8171 22.0202 34.246 23.3968 33.2308 24.412C32.2155 25.4273 30.839 25.9984 29.4032 26ZM5.41456 2.5231C4.64794 2.5239 3.91295 2.82879 3.37087 3.37087C2.82879 3.91295 2.5239 4.64794 2.5231 5.41456V20.5844C2.52363 21.3512 2.82841 22.0865 3.37052 22.6288C3.91263 23.1711 4.64777 23.4761 5.41456 23.4769H29.4032C30.17 23.4761 30.9053 23.1711 31.4476 22.6288C31.9898 22.0866 32.2948 21.3513 32.2956 20.5844V5.41456C32.2946 4.64785 31.9894 3.91286 31.4472 3.37081C30.905 2.82876 30.1699 2.5239 29.4032 2.5231H5.41456Z" fill="#2196F3" />
                            <path d="M17.3953 16.3961C16.3369 16.4065 15.3058 16.0598 14.4686 15.412L0.977057 4.66063C0.715413 4.45198 0.547369 4.14794 0.509894 3.8154C0.472419 3.48285 0.568582 3.14904 0.777228 2.8874C0.985874 2.62575 1.28991 2.45771 1.62246 2.42023C1.955 2.38276 2.28882 2.47892 2.55046 2.68757L16.0379 13.439C16.4364 13.7216 16.913 13.8728 17.4015 13.8715C17.89 13.8703 18.3659 13.7166 18.7629 13.4319L32.0838 2.69261C32.3441 2.48263 32.6772 2.38465 33.0097 2.42023C33.3423 2.45582 33.647 2.62204 33.857 2.88235C34.067 3.14266 34.165 3.47572 34.1294 3.80826C34.0938 4.14081 33.9276 4.4456 33.6673 4.65558L20.3504 15.3949C19.5074 16.0541 18.4654 16.4071 17.3953 16.3961Z" fill="#2196F3" />
                        </svg>

                    </div>

                    <div className='aboutConnactionsCart-content-desc'>

                        <h4>Email</h4>

                        {

                            email?.map((item,index) => (


                                <p key={index}>{item.email}</p>
                            ))
                        }

                    </div>

                </div>
            </div>

        </div>
    )
}
