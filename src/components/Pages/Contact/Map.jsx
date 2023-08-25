import axios from 'axios'
import { useEffect, useState } from 'react'

const Map = () => {
    const BASE_URL = 'https://api.softwarevillage.az/api/core/map'

    const [contactMap, setContactMap] = useState({})

    const getContactMap = async () => {
        const res = await axios(BASE_URL)
        const data = await res.data
        setContactMap(data)
    }
    // console.log(contactMap, 'mapdi');
    // console.log(contactMap.map);

    useEffect(() => {
        getContactMap()
    }, [])


    return (
        <>
            <div className="map-form__map">
                <iframe src=
                {`${contactMap.map}`}
                
                
                    allowFullscreen=""
                    loading="lazy"
                    title="map"
                    referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </>
    )
}

export default Map