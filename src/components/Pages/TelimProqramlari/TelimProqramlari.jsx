import React, { useEffect, useState } from 'react'
import axios from 'axios'

import BredCrampDetails from '../../section/BredCrampDetails/BredCrampDetails'
import img1 from '../../../assets/img/header-imgs/about-bcg.png'
import { Link, useParams} from 'react-router-dom'

const TelimProqramlari = ({ products }) => {
    

const { slug } = useParams()
const [data, setData] = useState({})


// const getData = async () => {
//     await axios.get(`https://api.softwarevillage.az/api/core/${slug}`)
//     .then((res) => {
//         setData(res?.data)
//     }).catch(() => {

//     })
  
// }

// useEffect(() => {
//     getData()
//     console.log(slug)
// }, []);
    
    return (
        <>
        <BredCrampDetails
        title ={data?.title}
        desc={'testt'}
        inPage="Telim Proqramlari"
        image={img1}
        />
    

        <div className='telim-proqramlari-container'>
            {/* {
                map
            } */}
            <div className="telim-proqramlari-card fulll">
                <div className="telim-proqramlari-card-main">
                <div className="telim-proqramlari-card-content">
                    <div className="telim-proqramlari-card-icons">

                    </div>
                    <div className="telim-proqramlari-card-desc">
                        <h6>Full-Stack JavaScript MERN</h6>
                    </div>
                
                </div>
               
                </div>
                <div className="telim-proqramlari-card-duration">
                        <p>
                            <span>Müddət:</span>
                            <span>12 ay</span>
                        </p>
                    </div>
                
            </div>

            {/* <div className="telim-proqramlari-card fulll">
                <div className="telim-proqramlari-card-main">
                <div className="telim-proqramlari-card-content">
                    <div className="telim-proqramlari-card-icons">

                    </div>
                    <div className="telim-proqramlari-card-desc">
                        <h6>Full-Stack JavaScript MERN</h6>
                    </div>
                
                </div>
               
                </div>
                <div className="telim-proqramlari-card-duration">
                        <p>
                            <span>Müddət:</span>
                            <span>12 ay</span>
                        </p>
                    </div>
                
            </div>
           


            <div className="telim-proqramlari-card fulll">
                <div className="telim-proqramlari-card-main">
                <div className="telim-proqramlari-card-content">
                    <div className="telim-proqramlari-card-icons">

                    </div>
                    <div className="telim-proqramlari-card-desc">
                        <h6>Full-Stack JavaScript MERN</h6>
                    </div>
                
                </div>
               
                </div>
                <div className="telim-proqramlari-card-duration">
                        <p>
                            <span>Müddət:</span>
                            <span>12 ay</span>
                        </p>
                    </div>
                
            </div> */}
        </div>


        
        </>
    )
}

export default TelimProqramlari