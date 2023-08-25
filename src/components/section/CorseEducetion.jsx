import React, { useEffect, useState } from 'react'

import axios from 'axios'


const CorseEducetion = () => {

    const BASE_URL = `https://api.softwarevillage.az/api/core/education-section`;


    const [courseDetail, setCourseDetail] = useState([])

    const getCourseDetail = async () => {
        const res = await axios(BASE_URL)
        const data = await res.data
        setCourseDetail(data)
    }
    // console.log(courseDetail);

    useEffect(() => {
        getCourseDetail()
    }, [])


    return (
        <div className='corese-educetion-container'>
            <div className="corse-education-card">
                <div className="corse-education-card-content"> <h2 className="corse-education-card-title">{courseDetail?.title}
                </h2>
                    <p className="corse-education-desc" dangerouslySetInnerHTML={{ __html: courseDetail?.description?.slice(0, 500) }} />
                </div>

            </div>


            <div className="corse-education-card card-in-container">
                {/* {courseDetail.items?.map((item, index) => {
                        if(index % 2 === 0){
                            
                            return (<div className="card-in-card mrt">
                                <div className="card-in-card-img">
                                    <img src={`https://api.softwarevillage.az${item?.image}`} alt="" />
                                </div>
                                <div className="card-in-card-content">
                                    <h1>{item?.title}</h1>
                                    <p>{item?.description}</p>
                                </div>


                            </div>)
                        }else{
                            return (<div className="card-in-card">
                                <div className="card-in-card-img">
                                    <img src={`https://api.softwarevillage.az${item?.image}`} alt="" />
                                </div>
                                <div className="card-in-card-content">
                                    <h1>{item?.title}</h1>
                                    <p>{item?.description}</p>
                                </div>

                            </div>)
                        }
                    })} */}
                {courseDetail.items?.map((item, index) => (
                    <div
                        key={index}
                        className={`card-in-card ${index % 2 === 0 ? "mrt" : ""}`}
                    >
                        <div className="card-in-card-img">
                            <img
                                src={`https://api.softwarevillage.az${item?.image}`}
                            />
                        </div>
                        <div className="card-in-card-content">
                            <h1>{item?.title}</h1>
                            <p>{item?.description}</p>
                        </div>
                    </div>
                ))}


            </div>

        </div>
    )
}

export default CorseEducetion