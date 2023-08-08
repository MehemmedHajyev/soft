import React from 'react'

const DinamikINfarmation = ({data}) => {
    return (
        <div className='dinamik-infarmation-container'>
            <div className="dinamik-infarmation-container-item">
                <div className="dinamik-infarmation-container-item-content" dangerouslySetInnerHTML={{ __html: data?.description }} />
            </div>
            <div className="dinamik-infarmation-container-item">
                <div className="dinamik-infarmation-container-item-content-for-image">
                    <img src={`https://api.softwarevillage.az${data?.main_image}`} alt="" />
                </div>
            </div>
        </div>
    )
}

export default DinamikINfarmation