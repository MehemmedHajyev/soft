import React from 'react'
import temirImg from '../../assets/svgs/temir.png'

const TemirPage = () => {
    return (
        <>
        <div className='main-temir-page'>
        <div className='temir-page'>
                <div>
                    <img src={temirImg} className="temir-img" alt="" />

                </div>

            </div>

            <marquee behavior="" direction="">Web-sitede hal-hazirda təmir işləri aparilir</marquee>

        </div>
          



        </>

    )
}

export default TemirPage