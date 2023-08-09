import React from 'react'

const BlogSectionTwo = ({ datablog }) => {

    return (
        <div className='section-two'>
            <div className='section-one-bloq-details '>

                <div className="section-one-bloq-details-card">
                    <img
                        src={`https://api.softwarevillage.az${datablog?.image_2}`}
                        alt="" />
                </div>

                <div className="section-one-bloq-details-card">
                    <h1>{datablog?.blog_title_2}</h1>
                    <p dangerouslySetInnerHTML={{ __html: datablog?.blog_description_2?.slice(0, 500) }} />
                </div>


            </div>
        </div>

    )
}

export default BlogSectionTwo