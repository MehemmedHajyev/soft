import React, { useEffect, useState } from 'react'
import axios from 'axios'
import TelimProqramHome from './TelimProqramHome'


const TelimProqramlariMain = () => {


const [data, setData] = useState([])


const getData = async () => {
    await axios.get(`https://api.softwarevillage.az/api/course`)
    .then((res) => {
        setData(res?.data)
    }).catch(() => {

    })
  
}

useEffect(() => {
    getData()
}, []);
    
    return (
        <>
     <TelimProqramHome />
     
        <div className='telim-proqramlari-container'>
        {data.map((item) => (
  <div key={item.id} className="telim-proqramlari-card fulll">
    <a href={`/detail/${item.slug}`}>
      <div className="telim-proqramlari-card-main">
        <div className="telim-proqramlari-card-content">
          <div className="telim-proqramlari-card-icons">
            <img
              src={`https://api.softwarevillage.az${item?.main_image}`}
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
    </a>
  </div>
))}

        </div>


        
        </>
    )
}

export default TelimProqramlariMain