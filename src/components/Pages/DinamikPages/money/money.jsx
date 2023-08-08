import React from 'react'

const Money = ({ data }) => {
  return (
    <div className='money-container'>
      <div className="money-container-content">
        <h1>{data?.salary?.title}</h1>
        <p>{data?.salary?.description}</p>
      </div>
      <div className="money-card-container">

        <div className="money-card"></div>
        <div className="money-card"></div>
        <div className="money-card"></div>

      </div>
    </div>
  )
}

export default Money