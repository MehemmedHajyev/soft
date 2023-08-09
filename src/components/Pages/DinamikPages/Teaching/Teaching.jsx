import React from 'react'
import img from '../../../../assets/img/card-img/M3_integrations_all_integrations.png.png'

const Teaching = ({data}) => {
  return (
    <div className='teaching-container'>
      <div className="teaching-container-content">
        <h1>Bu kursu onlardan öyrənəcəksən
        </h1>
        <div className="teaching-container-content-card-container">
          <div className="teaching-container-content-card for-img-tec">
            <div>
            <div className="for-images-teacing">
              <img 
                src={`https://api.softwarevillage.az${data?.teacher?.image}`}
                alt="" />
            </div>
            <div className="teaching-container-content-card-title-des">
              <h2>{data.teacher?.title}</h2>
              
              <p>{data.teacher?.position}</p>
            </div>
            </div>
          </div>
          <div className="teaching-container-content-card for-teacing-desc-info">
            <div className="teaching-container-content-card-just-name-infarmation">
              <h1>{data.teacher?.title}</h1>
              <p>
                {data.teacher?.about}
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Teaching