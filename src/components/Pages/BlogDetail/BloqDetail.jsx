
import { Link, useParams } from 'react-router-dom'
import img1 from '../../../assets/img/header-imgs/about-bcg.png'
import img2 from '../../../assets/img/home-in-about-img/mobile.png'


import React, { useEffect, useState } from 'react'

import axios from 'axios'

const MobilePrograming = () => {

    const { slug } = useParams()
    const [data, setData] = useState({})

    const getData = async () => {
        await axios.get(`https://api.softwarevillage.az/api/blogs/${slug}`)
            .then((res) => {
                setData(res?.data)
            }).catch(() => {

            })

    }

    useEffect(() => {
        getData()
        console.log(slug)
    }, []);

    return (
        <>
            <div className='about-header'>
                <div className="shwadow">
                    <img src={`https://api.softwarevillage.az${data?.image}`}
                        className="header-img" />
                    <div className="shadow-for-img">
                        <div className="mobilePrograming">
                            <h1>{data?.title}</h1>
                        </div>
                        <div className="about-header-come-back-buttons">
                            <p>Ana səhifə /<span>{data?.slug}</span></p>
                        </div>
                    </div>
                </div>

            </div>

            <div className="mobile-programing-container">

                <div className="mobile-programing-card">
                    <div className="mobile-programing-card-content">
                        <h2 dangerouslySetInnerHTML={{ __html: data?.title }} />

                        <p dangerouslySetInnerHTML={{ __html: data?.description?.slice(0, 500) }}/>

                    </div>
                </div>
                <div className="mobile-programing-card">
                    <img src={`https://api.softwarevillage.az${data?.background_image}`}


                        alt="" />
                </div>




            </div>


            <div className="mobile-programing-description">
                <h2> Mobil proqramlaşdırmada gələcək tendensiyalar nədir?
                </h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id sequi, eos consequuntur temporibus quia fugiat similique. Quia fugit fuga vero ad, eius at maiores sed optio in quam ipsa quisquam perferendis, doloremque nemo dolorem qui nam itaque nihil molestias dignissimos? Officia ipsam consequuntur quod possimus similique repellendus aliquid, voluptates minima ullam distinctio soluta sequi accusantium voluptatem perspiciatis dignissimos, earum odit quisquam corporis repudiandae voluptatum nobis eveniet ipsa. Incidunt quis, accusamus unde voluptatibus perferendis veniam aliquam temporibus, nam commodi labore sunt similique totam laudantium. Debitis iusto aliquam assumenda tenetur earum impedit repellat quos reprehenderit? Molestiae reiciendis, debitis ut dignissimos suscipit iusto?</p>
            </div>






            <div className="mobile-programing-description add">

                <h2> Mobil proqramlaşdırmada gələcək tendensiyalar nədir?
                </h2>


                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.</p>
                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id sequi, eos consequuntur temporibus quia fugiat similique. Quia fugit fuga vero ad, eius at maiores sed optio in quam ipsa quisquam perferendis, doloremque nemo dolorem qui nam itaque nihil molestias dignissimos? Officia ipsam consequuntur quod possimus similique repellendus aliquid, voluptates minima ullam distinctio soluta sequi accusantium voluptatem perspiciatis dignissimos, earum odit quisquam corporis repudiandae voluptatum nobis eveniet ipsa. Incidunt quis, accusamus unde voluptatibus perferendis veniam aliquam temporibus, nam commodi labore sunt similique totam laudantium. Debitis iusto aliquam assumenda tenetur earum impedit repellat quos reprehenderit? Molestiae reiciendis, debitis ut dignissimos suscipit iusto?</p>
            </div>










            <div className="mobile-programing-container">

                <div className="mobile-programing-card">
                    <img src={img2} alt="" />
                </div>
                <div className="mobile-programing-card">
                    <div className="mobile-programing-card-content">
                        <h2> Mobil proqramlaşdırmada gələcək tendensiyalar nədir?
                        </h2>

                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    </div>
                </div>




            </div>


            <div className="mobile-programing-description">
                <h2> Mobil proqramlaşdırmada gələcək tendensiyalar nədir?
                </h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id sequi, eos consequuntur temporibus quia fugiat similique. Quia fugit fuga vero ad, eius at maiores sed optio in quam ipsa quisquam perferendis, doloremque nemo dolorem qui nam itaque nihil molestias dignissimos? Officia ipsam consequuntur quod possimus similique repellendus aliquid, voluptates minima ullam distinctio soluta sequi accusantium voluptatem perspiciatis dignissimos, earum odit quisquam corporis repudiandae voluptatum nobis eveniet ipsa. Incidunt quis, accusamus unde voluptatibus perferendis veniam aliquam temporibus, nam commodi labore sunt similique totam laudantium. Debitis iusto aliquam assumenda tenetur earum impedit repellat quos reprehenderit? Molestiae reiciendis, debitis ut dignissimos suscipit iusto?</p>
            </div>





            <div className="mobile-programing-container">


                <div className="mobile-programing-card">
                    <div className="mobile-programing-card-content">
                        <h2> Mobil proqramlaşdırmada gələcək tendensiyalar nədir?
                        </h2>

                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    </div>
                </div>

                <div className="mobile-programing-card">
                    <img src={img2} alt="" />
                </div>


            </div>
        </>




    )
}

export default MobilePrograming