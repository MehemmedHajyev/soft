
import { useParams } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import BredCramp from '../../section/BredCramp/BredCramp'
import BlogSectionOne from './BlogSectionOne'
import BlogSectionTwo from './BlogSectionTwo'
import BlogSectionThere from './BlogSectionThere'
import BlogSectionFour from './BlogSectionFour'
import BlogSectionFive from './BlogSectionFive'
import Partniyorlar from '../../section/Partniyorlar'


const MobilePrograming = () => {

    const { slug } = useParams()
    const [datablog, setDatablog] = useState({})

    const getData = async () => {
        await axios.get(`https://api.softwarevillage.az/api/blogs/${slug}`)
            .then((res) => {
                setDatablog(res?.data)
            }).catch(() => {

            })

    }

    useEffect(() => {
        getData()
        console.log(slug)
    }, []);

    return (
        <>
            <BredCramp
                image={`https://api.softwarevillage.az${datablog?.image}`}
                title={datablog?.title}
                inPage={datablog?.title} />

            <BlogSectionOne datablog={datablog} />
            <BlogSectionThere datablog={datablog} />
            <BlogSectionTwo  datablog={datablog} />
            <BlogSectionFive  datablog={datablog} />
            <BlogSectionFour  datablog={datablog}  />
            <Partniyorlar />



      
        </>




    )
}

export default MobilePrograming