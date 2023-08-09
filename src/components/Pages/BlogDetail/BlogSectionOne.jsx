import React from 'react'

const BlogSectionOne = ({datablog}) => {
  return (
    <div className='section-one-bloq-details'>
        <div className="section-one-bloq-details-card">
          <h1>{datablog?.title_1}</h1>
          <p  dangerouslySetInnerHTML={{ __html: datablog?.description_1?.slice(0, 500) }}/>
        </div>
        <div className="section-one-bloq-details-card">
          <img 
          src={`https://api.softwarevillage.az${datablog?.image_1}`}
           alt="" />
        </div>

    </div>
  )
}

export default BlogSectionOne