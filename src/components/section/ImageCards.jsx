import React from 'react';
 import img from '../../assets/img/blog-card-img/img.png';

const ImageCards = () => {
    return (
        <>
            <div className="ImageCards-main">
                <h1>Sizi nələr gözləyir?</h1>
                <div className="ImageCards-container">

                    <div className="ImageCards-container-card">
                        <img src={img} alt="" />
                        <div className="ImageCards-container-card-hover-content">
                        <p>loremmm</p>  

                        </div>
                    </div>


                    <div className="ImageCards-container-card">
                        <img src={img} alt="" />
                        <div className="ImageCards-container-card-hover-content">
                        <p>loremmm</p>  

                        </div>
                    </div>
                    <div className="ImageCards-container-card">
                        <img src={img} alt="" />
                        <div className="ImageCards-container-card-hover-content">
                        <p>loremmm</p>  

                        </div>
                    </div>
                    <div className="ImageCards-container-card">
                        <img src={img} alt="" />
                        <div className="ImageCards-container-card-hover-content">
                        <p>loremmm</p>  

                        </div>
                    </div>
               
               

                </div>


            </div>

        </>
    )
}

export default ImageCards