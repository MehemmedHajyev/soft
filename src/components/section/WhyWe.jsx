import axios from 'axios';
import React, { useEffect, useState } from 'react'
import WhyWe2 from './WhyWe2'



// apiden gelecek burda

const WhyWe = () => {
    const BASE_URL = 'https://api.softwarevillage.az/api/core/why-us-text';


    const [aboutContent, setaboutContent] = useState({})
  
    const getaboutContent = async () => {
      const res = await axios(BASE_URL)
      const data = await res.data
      setaboutContent(data)
    }
    console.log(aboutContent, "aboutcontent");
  
    useEffect(() => {
      getaboutContent()
    }, [])
    return (
        <div className='why-we'>
            <h4>{aboutContent.title}</h4>
            <p className='why-us-description'  dangerouslySetInnerHTML={{ __html: aboutContent?.description?.slice(0, 200) }}/>
            <WhyWe2 />
        

        </div>

    )
}

export default WhyWe