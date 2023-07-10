import React from 'react'
import img from '../../assets/img/card-img/imgg.png'

const CorseEducetion = () => {
    return (
        <div className='corese-educetion-container'>
            <div className="corse-education-card">
                <div className="corse-education-card-content"> <h2 className="corse-education-card-title">Softwarevillage’deTəhsil Təcrübəsi
                </h2>
                    <p className="corse-education-desc">Təhsil təcrübənizi ən səmərəli etmək üçün çalışırıq.</p>

                </div>

            </div>


            <div className="corse-education-card card-in-container">
                <div className="card-in-card mrt">
                    <div className="card-in-card-img">
                        <img src={img} alt="" />
                    </div>
                    <div className="card-in-card-content">
                        <h1>Lorem</h1>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.  Lorem Ipsum has been the industry's standard dummy text ever since the </p>
                    </div>


                </div>

                <div className="card-in-card">
                    <div className="card-in-card-img">
                        <img src={img} alt="" />
                    </div>
                    <div className="card-in-card-content">
                        <h1>Lorem</h1>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.  Lorem Ipsum has been the industry's standard dummy text ever since the </p>
                    </div>

                </div>


                <div className="card-in-card mrt">
                    <div className="card-in-card-img">
                        <img src={img} alt="" />
                    </div>
                    <div className="card-in-card-content">
                        <h1>Lorem</h1>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.  Lorem Ipsum has been the industry's standard dummy text ever since the </p>
                    </div>


                </div>
                <div className="card-in-card">
                    <div className="card-in-card-img">
                        <img src={img} alt="" />
                    </div>
                    <div className="card-in-card-content">
                        <h1>Lorem</h1>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.  Lorem Ipsum has been the industry's standard dummy text ever since the </p>
                    </div>

                </div>

            </div>

        </div>
    )
}

export default CorseEducetion