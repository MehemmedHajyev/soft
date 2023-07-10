

import { useEffect, useState } from 'react'
import axios from 'axios'
import { Routes, Route } from "react-router-dom";
import Home from '../../Pages/Home/Home';
import Blog from '../../Pages/Blog/Bloq'
import Contact from '../../Pages/Contact/Contact'
import Quastion from '../../Pages/Suallar/Quastion';
// import MobilePrograming from '../../Pages/MobilePrograming/MobilePrograming';
import About from '../../Pages/About/About';
import NoPage from '../../Pages/NoPage/NoPage';
import Corse from '../../Pages/Corses/Corse';
import TelimProqramlari from '../../Pages/TelimProqramlari/TelimProqramlari';
import  BloqDetail from '../../Pages/BlogDetail/BloqDetail'

const BASE_URL = 'https://api.softwarevillage.az/api/course'



const Routing = () => {
    const [products, setProducts] = useState([])

    const handleGetProducts = async () => {
        const res = await axios.get(BASE_URL)
        const data = res.data
        setProducts(data)
    }
    useEffect(() => {
        handleGetProducts()
    }, [])


    return (
        <>
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/about" element={<About />} />
                <Route path="/telimproqramlari" element={<TelimProqramlari />} />
                <Route path="contact" element={<Contact />} />
                <Route path="bloq" element={<Blog />} />

                <Route path="bloq/:slug" element={<BloqDetail />} />
                
                <Route path="corse" element={<Corse />} />
                <Route path="quastion" element={<Quastion />} />
                <Route path="contact" element={<Contact />} />
                {/* <Route path="mobile" element={<MobilePrograming />} /> */}

                <Route path="detail/:slug" element={<TelimProqramlari />} />

                <Route path="*" element={<NoPage />} />
            </Routes>

        </>
    )
}

export default Routing