import React from 'react'
import { Link } from 'react-router-dom'


const BredCrampDinamic = ({title ,image,inPage} ) => {


    
    return (
        <div>
            <div className='about-header'>
                <div className="shwadow">
                    <img src={image} className="header-img" />
                    <div className="shadow-for-img ">
                        <div className="about-header-content">
                            <div>
                                <h1>{title}</h1>
                                {/* <p>{text}</p> */}
                                <button className='btn-add'>Muraciyet et</button>

                            </div>
                            <div className="about-header-come-back-buttons">
                                <p>
                                <Link to="/" className='about-header-come-back-buttons-link' > Ana səhifə/</Link>
                                    <span>{inPage}</span></p>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    )
}

export default BredCrampDinamic