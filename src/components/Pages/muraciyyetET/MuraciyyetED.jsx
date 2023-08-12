import Link from 'antd/es/typography/Link'
import React from 'react'
import Partniyorlar from '../../section/Partniyorlar'
import MuraciyyetForm from './MuraciyyetForm'



const MuraciyyetED = () => {
    return (
        <>
            <div>

                <div className="muraciyyet-header">
                    <div className="swhadow-muraciyyet">
                        {/* <img src={img} alt="" className='muraciyyet-img' /> */}
                        <div className="shadow-for-muraciyyet-img">
                            <div className="muraciyyet-link">
                                <p className=''>
                                    <Link to='/'>
                                        <span className='static-link'>
                                            Ana Səhifə /
                                        </span>
                                    </Link>
                                    <span className='dinamic-link'>
                                        Müraciət et
                                    </span>
                                </p>

                                <h1>Müraciət et</h1>

                            </div>




                        </div>
                    </div>

                </div>
            </div>
            <div className="muraciyyet-main-controls">
                <div className="form-control-container">
                  <h2 className='form-control-container-title'>
                  Sizinlə əlaqəyə keçməyimiz üçün məlumatlarınızı daxil edin 
                    </h2>
                    <MuraciyyetForm />

                </div>
            </div>
            <Partniyorlar className='partniyorlar-for-muraciyyet' />
        </>
    )
}

export default MuraciyyetED

