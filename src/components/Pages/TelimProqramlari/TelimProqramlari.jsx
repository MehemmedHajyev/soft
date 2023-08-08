import React, { useEffect, useState } from 'react'
import axios from 'axios'

import BredCrampDetails from '../../section/BredCrampDetails/BredCrampDetails'
import img1 from '../../../assets/img/header-imgs/about-bcg.png'
import { Link, useParams, useNavigate} from 'react-router-dom'

import BredCramp from '../../section/BredCramp/BredCramp'

const TelimProqramlari = ({ products }) => {

    const navigate = useNavigate()
    

const { slug } = useParams()
const [data, setData] = useState([])


const getData = async () => {
    await axios.get(`https://api.softwarevillage.az/api/training-programs/${slug}`)
    .then((res) => {
        setData(res?.data)
    }).catch(() => {

    })
  
}

useEffect(() => {
    getData()
    console.log(slug)
}, []);
    
    return (
        <>
     {/* <TelimProqramHome /> */}
     <BredCramp

            title={data.title}

            inPage={data?.slug}

            text={data?.description}
            

            image={`https://api.softwarevillage.az${data?.image}`
            }

        />
     
        <div className='telim-proqramlari-container'>
        {

        data.map((item)=>(

            <a onClick={() => navigate(`${item.slug}`)} >

            <div className="telim-proqramlari-card fulll">
            <div className="telim-proqramlari-card-main">
            <div className="telim-proqramlari-card-content">
                <div className="telim-proqramlari-card-icons">
                    <img src={`https://api.softwarevillage.az${item?.main_image}`}
                        className="header-img" />
                </div>
                <div className="telim-proqramlari-card-desc">
                    <h6>{item?.title}</h6>
                </div>
            
            </div>
           
            </div>
            <div className="telim-proqramlari-card-duration">
                    <p>
                        <span>Müddəti:</span>
                        <span>{item?.duration}</span>
                    </p>
                </div>
            
        </div>
        </a>
        ))
        }


         

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