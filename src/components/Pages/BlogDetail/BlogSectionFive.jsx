import React from 'react'

const BlogSectionFive = ({datablog}) => {
  return (
    <div className='blog-desc-titel-container'>
        <h2>{datablog?.blog_title_1}</h2>
        <p dangerouslySetInnerHTML={{ __html: datablog?.blog_description_1?.slice(0, 500) }}/>
    </div>
  )
}

export default BlogSectionFive