import React from 'react'
import { Link } from 'react-router-dom'


const BredCrampDetails = ({ title, desc, inPage,image }) => {
    return (
        <div className='bred-cram-details'>
            <div>
                <img src={image} alt="" />
                <div className="bred-swadow">
                    <div className="bred-swadow-in-content">
                        <h1>{title}</h1>
                        <p>{desc}</p>


                    </div>

                </div>
                <div className="about-header-come-back-buttons">
                    <p>
                        <Link to="/" className='about-header-come-back-buttons-link' > Ana səhifə/</Link>
                        <span>{inPage}</span></p>
                </div>
            </div>

        </div>
    )
}

export default BredCrampDetails