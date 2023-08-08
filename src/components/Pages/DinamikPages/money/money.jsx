import React from 'react'

const Money = ({ data }) => {
  return (
    <div className='money-container'>
      <div className="money-container-content">
        <h1>{data?.salary?.title}</h1>
        <p>{data?.salary?.description}</p>
      </div>
      <div className="money-card-container">

        <div className="money-card">
          <div className="money-card-content">
            <div className="money-card-icon">
              icon
            </div>
            <h2>$ 10.000</h2>
            <p>1-3 illik təcrübə ilə </p>
          </div>

        </div>
    
        <div className="money-card">
          <div className="money-card-content">
            <div className="money-card-icon">
              icon
            </div>
            <h2>$ 10.000</h2>
            <p>1-3 illik təcrübə ilə </p>
          </div>

        </div>     <div className="money-card">
          <div className="money-card-content">
            <div className="money-card-icon">
              icon
            </div>
            <h2>$ 10.000</h2>
            <p>1-3 illik təcrübə ilə </p>
          </div>

        </div>

      </div>
    </div>
  )
}

export default Money