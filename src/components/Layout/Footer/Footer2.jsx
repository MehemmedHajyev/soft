import React, { useEffect, useState } from 'react';
import { Input} from 'antd';
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
        console.log(res?.data)
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
                <Input placeholder="Kursu seçin"  type='text' />
              

                <Link to="/muraciyyet-et">
                  <button> Müraciət et</button>
                </Link></form>

            </div>
          </div>
        </div>

        <div className="footer-main-content-container">

          <div className="footer-media-content-container">
            <div className="footer-logo-and-content-container">
              <div className="footer-logo"><a></a>
                <Link to='/'>
                  <img src={Logo}/>
                </Link>
              </div>
            </div>
            <div></div>

            <ul className="links-container">
              <li><a> <Link  to="haqqimizda"><a className="item-link">Haqqımızda</a></Link></a></li>
              <li><a>
              <Link to="telimproqramlari"><a className="item-link">Təlim proqramları</a></Link>
                </a></li>
              <li><a>
              <Link  to="suallar"><a className="item-link">Suallar</a></Link>
                </a></li>
              <li><a>
              <Link  to="bloq"><a className="item-link">Bloq</a></Link>
                </a></li>
              <li><a>
              <Link  to="elaqe"><a className="item-link">Əlaqə</a></Link>
                </a></li>


            </ul>

            <ul className="boot-camps-list">
              {data?.map((d, i) => (
                <li key={i}><a><Link to={`/kurslar/${d?.slug}`}>{d?.title}</Link></a></li>
              ))}
            </ul>

            {/* <ul className="sosial-links">
              <li><a><Link to=''>
                <svg width="8" height="15" viewBox="0 0 8 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7.25977 8.125H5.20898V14.25H2.47461V8.125H0.232422V5.60938H2.47461V3.66797C2.47461 1.48047 3.78711 0.25 5.7832 0.25C6.74023 0.25 7.75195 0.441406 7.75195 0.441406V2.60156H6.63086C5.53711 2.60156 5.20898 3.25781 5.20898 3.96875V5.60938H7.64258L7.25977 8.125Z" fill="#222B45" />
                </svg>
              </Link></a></li>
              <li><a><Link to=''>
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7.41016 3.90625C9.37891 3.90625 11.0039 5.53125 11.0039 7.5C11.0039 9.5 9.37891 11.0938 7.41016 11.0938C5.41016 11.0938 3.81641 9.5 3.81641 7.5C3.81641 5.53125 5.41016 3.90625 7.41016 3.90625ZM7.41016 9.84375C8.69141 9.84375 9.72266 8.8125 9.72266 7.5C9.72266 6.21875 8.69141 5.1875 7.41016 5.1875C6.09766 5.1875 5.06641 6.21875 5.06641 7.5C5.06641 8.8125 6.12891 9.84375 7.41016 9.84375ZM11.9727 3.78125C11.9727 4.25 11.5977 4.625 11.1289 4.625C10.6602 4.625 10.2852 4.25 10.2852 3.78125C10.2852 3.3125 10.6602 2.9375 11.1289 2.9375C11.5977 2.9375 11.9727 3.3125 11.9727 3.78125ZM14.3477 4.625C14.4102 5.78125 14.4102 9.25 14.3477 10.4062C14.2852 11.5312 14.0352 12.5 13.2227 13.3438C12.4102 14.1562 11.4102 14.4062 10.2852 14.4688C9.12891 14.5312 5.66016 14.5312 4.50391 14.4688C3.37891 14.4062 2.41016 14.1562 1.56641 13.3438C0.753906 12.5 0.503906 11.5312 0.441406 10.4062C0.378906 9.25 0.378906 5.78125 0.441406 4.625C0.503906 3.5 0.753906 2.5 1.56641 1.6875C2.41016 0.875 3.37891 0.625 4.50391 0.5625C5.66016 0.5 9.12891 0.5 10.2852 0.5625C11.4102 0.625 12.4102 0.875 13.2227 1.6875C14.0352 2.5 14.2852 3.5 14.3477 4.625ZM12.8477 11.625C13.2227 10.7188 13.1289 8.53125 13.1289 7.5C13.1289 6.5 13.2227 4.3125 12.8477 3.375C12.5977 2.78125 12.1289 2.28125 11.5352 2.0625C10.5977 1.6875 8.41016 1.78125 7.41016 1.78125C6.37891 1.78125 4.19141 1.6875 3.28516 2.0625C2.66016 2.3125 2.19141 2.78125 1.94141 3.375C1.56641 4.3125 1.66016 6.5 1.66016 7.5C1.66016 8.53125 1.56641 10.7188 1.94141 11.625C2.19141 12.25 2.66016 12.7188 3.28516 12.9688C4.19141 13.3438 6.37891 13.25 7.41016 13.25C8.41016 13.25 10.5977 13.3438 11.5352 12.9688C12.1289 12.7188 12.6289 12.25 12.8477 11.625Z" fill="#222B45" />
                </svg>
              </Link></a></li>
              <li><a><Link to=''>
                <svg width="12" height="14" viewBox="0 0 12 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clipPath="url(#clip0_30_8578)">
                    <path d="M11.5115 5.82975C10.3931 5.83242 9.30225 5.48381 8.39289 4.83316V9.37098C8.39258 10.2114 8.13558 11.0318 7.65625 11.7223C7.17693 12.4128 6.49813 12.9406 5.71061 13.2351C4.92309 13.5295 4.0644 13.5767 3.24935 13.3702C2.4343 13.1637 1.70175 12.7134 1.14964 12.0795C0.597529 11.4457 0.252184 10.6584 0.159779 9.82304C0.0673749 8.98767 0.232316 8.14402 0.632547 7.40489C1.03278 6.66576 1.64922 6.06638 2.39945 5.68689C3.14968 5.30741 3.99794 5.1659 4.8308 5.28131V7.56367C4.44968 7.44385 4.04043 7.44746 3.66149 7.57399C3.28254 7.70052 2.95329 7.9435 2.72074 8.26823C2.4882 8.59296 2.36425 8.98283 2.3666 9.38218C2.36896 9.78152 2.49749 10.1699 2.73385 10.4919C2.9702 10.8139 3.3023 11.0529 3.68271 11.175C4.06311 11.2971 4.47238 11.2959 4.85206 11.1715C5.23174 11.0472 5.56241 10.8062 5.79686 10.4828C6.03131 10.1595 6.15754 9.77033 6.15753 9.37098V0.5H8.39289C8.39134 0.688688 8.40715 0.877119 8.44014 1.06291C8.51781 1.47766 8.67932 1.87221 8.91478 2.22243C9.15024 2.57265 9.4547 2.87118 9.80955 3.09975C10.3144 3.4334 10.9063 3.61124 11.5115 3.61111V5.82975Z" fill="#222B45" />
                  </g>
                  <defs>
                    <clipPath id="clip0_30_8578">
                      <rect width="11.38" height="13" fill="white" transform="translate(0.130859 0.5)" />
                    </clipPath>
                  </defs>
                </svg>
              </Link></a></li>
              <li><a><Link to=''>
                <svg width="18" height="13" viewBox="0 0 18 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.377 2.40625C17.752 3.71875 17.752 6.53125 17.752 6.53125C17.752 6.53125 17.752 9.3125 17.377 10.6562C17.1895 11.4062 16.5957 11.9688 15.877 12.1562C14.5332 12.5 9.2207 12.5 9.2207 12.5C9.2207 12.5 3.87695 12.5 2.5332 12.1562C1.81445 11.9688 1.2207 11.4062 1.0332 10.6562C0.658203 9.3125 0.658203 6.53125 0.658203 6.53125C0.658203 6.53125 0.658203 3.71875 1.0332 2.40625C1.2207 1.65625 1.81445 1.0625 2.5332 0.875C3.87695 0.5 9.2207 0.5 9.2207 0.5C9.2207 0.5 14.5332 0.5 15.877 0.875C16.5957 1.0625 17.1895 1.65625 17.377 2.40625ZM7.4707 9.0625L11.9082 6.53125L7.4707 4V9.0625Z" fill="#222B45" />
                </svg>
              </Link></a></li>
              <li><a><Link to=''>
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3.75391 14.5H0.847656V5.15625H3.75391V14.5ZM2.28516 3.90625C1.37891 3.90625 0.628906 3.125 0.628906 2.1875C0.628906 1.28125 1.37891 0.53125 2.28516 0.53125C3.22266 0.53125 3.97266 1.28125 3.97266 2.1875C3.97266 3.125 3.22266 3.90625 2.28516 3.90625ZM14.5977 14.5H11.7227V9.96875C11.7227 8.875 11.6914 7.5 10.1914 7.5C8.69141 7.5 8.47266 8.65625 8.47266 9.875V14.5H5.56641V5.15625H8.34766V6.4375H8.37891C8.78516 5.71875 9.72266 4.9375 11.1289 4.9375C14.0664 4.9375 14.6289 6.875 14.6289 9.375V14.5H14.5977Z" fill="#222B45" />
                </svg>
              </Link></a></li>
            </ul> */}
            <SosialLInks />
          </div>
        </div>
      </div>

    </div>
  )
}

export default Footer2