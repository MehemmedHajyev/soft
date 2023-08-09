import React from 'react'

const Sillabus = ({ data }) => {
  return (
    <div className='silibus-container'>
      <h1>Sillabus</h1>

      <div className="silibus-grid-container">
       
          {data?.syllabus?.map((d, i) => (
             <div className="silibus-grid-container-card">
            <div className="silibus-grid-container-card-content" key={i}>
              <h2>{d?.name}</h2>
              <ul className='sillabus-list'>

               {d?.items?.map((i, y) => (
                 <li className='item-list-sillabus' key={`${i}_${y}`}>
                 <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                   <g clip-path="url(#clip0_43_10007)">
                     <path fillRule="evenodd" clipRule="evenodd" d="M17.1536 9.12577L11.6721 16.3256C11.4465 16.622 11.0973 16.7972 10.7253 16.7996H10.7169C10.3485 16.7996 10.0006 16.6292 9.77256 16.3388L6.85423 12.6105C6.44624 12.0897 6.53744 11.3349 7.05943 10.9269C7.58021 10.5177 8.33619 10.6089 8.74418 11.1321L10.7037 13.6353L15.2444 7.67261C15.6452 7.14582 16.3976 7.04263 16.9268 7.44462C17.4536 7.84661 17.5556 8.59899 17.1536 9.12577ZM11.9997 0C5.37227 0 0 5.37227 0 11.9997C0 18.6259 5.37227 23.9994 11.9997 23.9994C18.6271 23.9994 23.9994 18.6259 23.9994 11.9997C23.9994 5.37227 18.6271 0 11.9997 0Z" fill="#00B887" />
                   </g>
                   <defs>
                     <clipPath id="clip0_43_10007">
                       <rect width="23.9994" height="24" fill="white" />
                     </clipPath>
                   </defs>
                 </svg>
                 <a href="">{i?.name}</a>
                 </li>
               ))}
              </ul>
            </div>
            <button className='sillabus-date-btn'>{d?.duration}</button>
        </div>
          ))}


         

        <button className='sillabus-muraciyyet-btn'>Müraciət et</button>
      </div>

    </div>
  )
}

export default Sillabus