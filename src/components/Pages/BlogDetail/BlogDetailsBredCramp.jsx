import React from 'react'
import { Link } from 'react-router-dom'


const BlogDetailsBredCramp = ({title, text ,image,inPage} ) => {
    return (
        <div>
            <div className='for-detail-breadCramp'>
                <div className="shwadow">
                    <img src={image} className="header-img" />
                    <div className="shadow-for-img ">
                        <div className="for-detail-breadCramp-content">
                            <div>
                                <h1>{title}</h1>
                                <p>{text}</p>
                            </div>
                            <div className="about-header-come-back-buttons">
                                <p>
                                <Link to="/" className='about-header-come-back-buttons-link' > Ana səhifə / </Link>
                                    <span>{inPage}</span></p>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    )
}

export default BlogDetailsBredCramp