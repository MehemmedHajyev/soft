import React from 'react'
import temirImg from '../../assets/svgs/temir.png'

const TemirPage = () => {
    return (
        <>
        <div className='main-temir-page'>
            <marquee behavior="" direction="">Veb Saytda hal-hazırda təmir işləri aparlılr</marquee>
        <div className='temir-page'>
                <div>
                    <img src={temirImg} className="temir-img" alt="" />

                </div>

            </div>



        </div>
          



        </>

    )
}

export default TemirPage