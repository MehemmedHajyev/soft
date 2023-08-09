import React from 'react'

const IsElanlari = ({ data }) => {
    return (
        <div className='is-elanlari-container money-container'>
            <div className="is-elanlari-container-content money-container-content">
                <h1>{data?.announcements?.title}</h1>
                <p>{data?.announcements?.description}</p>
            </div>
            <div className="is-elanlari-card-container">
                {data?.announcements?.items?.map((item, index) => (
                    <div className="is-elanlari-card" key={index}>
                        <div className="is-elanlari-card-content">
                            <div className="is-elanlari-card-icon">
                                <img className='money-card-icon'
                                    src={`https://api.softwarevillage.az${item?.image}`}
                                    alt="" />
                            </div>
                            <div className='is-elanlari-card-content-title-desc'>
                                <h2>{item?.title}</h2>
                                <p>{item?.description}</p>
                            </div>
                        </div>
                    </div>
                ))}


            
            </div>
        </div>

    )
}

export default IsElanlari