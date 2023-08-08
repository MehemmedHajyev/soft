import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import axios from 'axios';
const BASE_URL = 'https://api.softwarevillage.az/api/core/home_blog'

const BloqContent = () => {
    const [blogs, setBlogs] = useState([])
    const getBlogs = async () => {
        const res = await axios.get(BASE_URL)
        const data = await res.data
        setBlogs(data)
    }
    useEffect(() => {
        getBlogs()
        
    }, [])


    return (
        <div>
         <div className='blog-grid-container'>
    {
        blogs.map((blog) => (
            <div className="blog-grid-card">
                <img src={`https://api.softwarevillage.az${blog.image}`} alt="" />
                <p className='blog-grid-card-title'>{blog.title}</p>
                <div className="button-date-container">
                    <p className='blog-card-date'>{new Date(blog.created_at).toLocaleDateString('tr-TR')}</p>
                    <Link to={`/bloq/${blog?.slug}`}>
                        <button className='blog-card-button'>
                            <svg width="9" height="16" viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1.77199 14.6857L7.71484 7.99995L1.77199 1.31424" stroke="#292F36" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>
                    </Link>

                </div>
            </div>
        ))
    }
</div>



        </div>
    )
}

export default BloqContent