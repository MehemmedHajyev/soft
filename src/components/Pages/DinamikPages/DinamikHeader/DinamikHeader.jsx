import Link from 'antd/es/typography/Link'
import React from 'react'
import img from '../../../../assets/img/header-imgs/about-bcg.png'

const DinamikHeader = ({data}) => {

  return (
    <div>
      <div className='about-header'>
        <div className="shwadow">
          <img src={`https://api.softwarevillage.az${data?.background_image}`} className="header-img" />
          <div className="shadow-for-img ">
            <div className="about-header-content-for-dinamik">
              <div className='about-header-content-for-dinamik-item'>
                <h1>{data?.title}</h1>
                <p>{data?.desc}</p>
                <button className='muraciyyet-et-btn'> Müraciət et</button>
              </div>
              <div className='about-header-content-for-dinamik-item'>
                <div> <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={386}
                  height={203}
                  fill="none"
                >
                  <path
                    fill="#fff"
                    d="M25.229 203 2.523 180.162 0 177.625 151.373 0l63.071 73.588 47.935-40.6L386 182.7 360.771 203 257.333 78.662l-22.706 20.3 63.072 83.738-22.706 20.3-123.62-152.25L25.229 203Z"
                  />
                </svg></div>
                  <p className='kurs-cedveli-desc'>Kurs Cədvəli</p>
                <div className='kurs-cedveli'>
                  <div className='kurs-cedveli-items'>
                    <span>Müddət:</span>
                  <p>{data?.duration}</p>
                  </div>
                  <div className='kurs-cedveli-items'>
                    <span>Tədris forması:</span>
                  <p>{data?.teaching_form}</p>
                  </div>
                  <div className='kurs-cedveli-items'>
                    <span>Son müraciət tarixi:</span>
                  <p>{data?.last_apply_date ? data?.last_apply_date : '' }</p>
                  </div>
                 
                </div>

              </div>
              <div className="about-header-come-back-buttons">
                <p>
                  <Link to="/" className='about-header-come-back-buttons-link' > Ana səhifə / </Link>
                  <span>{data?.title}</span></p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  )
}

export default DinamikHeader