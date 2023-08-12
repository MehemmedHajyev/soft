import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';

const SosialLInks = () => {



    const [data, setData] = useState([]);

    const getData = async () => {

        await axios.get(`https://api.softwarevillage.az/api/core/socials`)
            .then((res) => {
                setData(res?.data)
                console.log(res?.data)
            }).catch((err) => {

            })
    }

    useEffect(() => {
        getData();
    }, [])

    return (
        <div>
            <ul className="sosial-links">
                {data?.map((d, i) => (
                    <li key={i}>
                        <a href={d?.social_link}>
                            <div className='sosial-links-svg' dangerouslySetInnerHTML={{ __html: d?.social_image }} />
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default SosialLInks