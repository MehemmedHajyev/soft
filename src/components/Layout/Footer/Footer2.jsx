import React, { useEffect, useState } from 'react';
import { Input } from 'antd';
import { Link } from 'react-router-dom';
import axios from 'axios';
import SosialLInks from './SosialLInks';
import Logo from '../../../assets/img/Logo/logo.png'


const Footer2 = () => {

  const [data, setData] = useState([]);

  const getData = async () => {

    // front-end-uzr-bootcamp
    await axios.get(`https://api.softwarevillage.az/api/core/footer-courses`)
      .then((res) => {
        setData(res?.data)
      }).catch((err) => {

      })
  }

  useEffect(() => {
    getData();
  }, [])

  return (

    <div className='footer'>
      <div className="footer-main-container">
        <div className="footer-search-container">
          <div className="footer-search-container-content">
            <h1 className="footer-search-title">Müraciət et</h1>
            <p className="footer-search-desc">Kurs və tədris proqramları haqqında daha ətraflı məlumat üçün qeydiyyatdan keçin , biz sizinlə əlaqə saxlayaq.  </p>
            <div className="footer-search-container-content-inputs">
              <form action="" method="post">

                <Input placeholder="Ad Soyadınız" type='text' />

                <Input placeholder="(055) 000 00 00" type='phone' />
                <Input placeholder="Kursu seçin" type='text' />


                <Link to="/muraciyyet-et">
                  <button> Müraciət et</button>
                </Link></form>

            </div>
          </div>
        </div>

        <div className="footer-main-content-container">

          <div className="footer-media-content-container">
            <div className="footer-logo-and-content-container">
              <div className="footer-logo">
                <Link to='/'>
                  <img src={Logo} />
                </Link>
              </div>
            </div>
            <div></div>

            <ul className="links-container">
              <li>
                <Link className="item-link" to="bloq">Haqqımızda</Link>

              </li>
              <li>

                <Link className="item-link" to="telimproqramlari">Təlim proqramları</Link>



              </li>
              <li>

                <Link className="item-link" to="suallar">Suallar</Link>

              </li>
              <li>

                <Link className="item-link" to="bloq">Bloq</Link>

              </li>
              <li>

                <Link className="item-link" to="elaqe">Əlaqə</Link>

              </li>


            </ul>
            <ul className="boot-camps-list">
              {data?.map((d, i) => (
                <li key={i}>
                  <Link to={`/kurslar/${d?.slug}`}>
                    {d?.title.length > 50 ? `${d?.title.substring(0, 50)}...` : d?.title}
                  </Link>
                </li>
              ))}
            </ul>


            <SosialLInks />
          </div>
        </div>
      </div>

    </div>
  )
}

export default Footer2