import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

import axios from 'axios'
import Item from 'antd/es/list/Item'

const CorseTime = () => {

    const { slug } = useParams()
    const BASE_URL = `https://api.softwarevillage.az/api/course/${slug}`;


    const [courseDetail, setCourseDetail] = useState([])

    const getCourseDetail = async () => {
        const res = await axios(BASE_URL)
        const data = await res.data
        setCourseDetail(data)
    }
    console.log(courseDetail);

    useEffect(() => {
        getCourseDetail()
    }, [])
    return (
        <div className="corse-time-main">
            <div className='corse-time'>
            {courseDetail.additionals?.map((item) => (
                <div className="corse-time-icon">
                <div className="corse-time-content">
                    <div className="corse-time-svg">
                        {/* <svg width="27" height="34" viewBox="0 0 27 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M13.5 0C8.84756 0 5.0625 3.8131 5.0625 8.5V11.9125C5.0625 12.8445 4.30698 13.6 3.375 13.6C2.47989 13.6 1.62145 13.9582 0.988514 14.5958C0.355579 15.2335 0 16.0983 0 17V30.6C0 31.5017 0.355579 32.3665 0.988514 33.0042C1.62145 33.6418 2.47989 34 3.375 34H23.625C24.5201 34 25.3785 33.6418 26.0115 33.0042C26.6444 32.3665 27 31.5017 27 30.6V17C27 16.0983 26.6444 15.2335 26.0115 14.5958C25.3785 13.9582 24.5201 13.6 23.625 13.6C22.693 13.6 21.9375 12.8445 21.9375 11.9125V8.5C21.9375 3.8131 18.1524 0 13.5 0ZM8.4375 8.5C8.4375 5.6882 10.7089 3.4 13.5 3.4C16.2911 3.4 18.5625 5.6882 18.5625 8.5C18.5625 11.2959 16.2959 13.6 13.5 13.6C10.7041 13.6 8.4375 11.2959 8.4375 8.5ZM16.231 25.7866C15.7173 26.4969 15.1875 27.269 15.1875 28.1456V28.9125C15.1875 29.8445 14.432 30.6 13.5 30.6C12.568 30.6 11.8125 29.8445 11.8125 28.9125V28.1463C11.8125 27.2694 11.2824 26.497 10.7677 25.787C10.6479 25.6218 10.5427 25.4453 10.4538 25.2592C10.1588 24.6422 10.0563 23.9495 10.1599 23.2726C10.2635 22.5957 10.5683 21.9663 11.0342 21.4675C11.5 20.9686 12.105 20.6237 12.7693 20.4782C13.2628 20.3683 13.7744 20.3714 14.2665 20.4872C14.7587 20.603 15.2187 20.8286 15.6127 21.1474C16.0068 21.4662 16.3247 21.8701 16.5432 22.3292C16.7617 22.7882 16.875 23.2909 16.875 23.8C16.874 24.3946 16.7175 24.9784 16.4213 25.4926C16.3628 25.5941 16.2993 25.6922 16.231 25.7866Z" fill="#23A6F0" />
                        </svg> */}

                    <img src={`https://api.softwarevillage.az${item?.image}`} alt="" />

                    </div>
                    <div className="corse-time-title">
                        {item?.name}
                    </div>
                    <div className="corse-time-title">
                        {item?.value}
                    </div>
                </div>

            </div>
            ))}
        </div>
        </div>
        
      
    )
}

export default CorseTime