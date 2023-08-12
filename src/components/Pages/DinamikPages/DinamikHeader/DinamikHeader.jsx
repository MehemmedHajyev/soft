import React from 'react';
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom/dist';
const DinamikHeader = ({ data }) => {
  const navigate = useNavigate();

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
  };

 

  return (
    <div>
      <div className='dinamik-page-header'>
        <div className="shwadow">
          <img src={`https://api.softwarevillage.az${data?.background_image}`} className="header-img" />
          <div className="shadow-for-img ">
            <div className="about-header-content-for-dinamik">
              <div className='about-header-content-for-dinamik-item'>
                <h1>{data?.title}</h1>
                <p>{data?.desc}</p>
                <Link to="/muraciyyet-et">
                  <button className='muraciyyet-et-btn'> Müraciət et</button>
                </Link>
              </div>
              <div className='about-header-content-for-dinamik-item'>
                <svg className='dinamig-page-svg' xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 386 203" fill="none">
                  <path d="M25.2288 203L2.52288 180.162L0 177.625L151.373 0L214.444 73.5875L262.379 32.9875L386 182.7L360.771 203L257.333 78.6625L234.627 98.9625L297.699 182.7L274.993 203L151.373 50.75L25.2288 203Z" fill="white" />
                </svg>
                <p >Kurs Cədvəli</p>
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
                    <p>{data?.last_apply_date ? formatDate(data.last_apply_date) : ''}</p>
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
  );
};

export default DinamikHeader;
