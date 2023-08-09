import React from 'react';

const Money = ({ data }) => {
  return (
    <div className='money-container'>
      <div className="money-container-content">
        <h1>{data?.salary?.title}</h1>
        <p>{data?.salary?.description}</p>
      </div>
      <div className="money-card-container">
        {data?.salary?.items?.map((item, index) => (
          <div className="money-card" key={index}>
            <div className="money-card-content">
              <div className="money-card-icon">
                {/* <img alt="" /> */}
                <img className='money-card-icon'
                src={`https://api.softwarevillage.az${item?.image}`}
                alt="" />
              </div>
              <h2>{item?.title}</h2>
              <p>{item?.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Money;
