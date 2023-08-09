
import React, { useEffect, useState } from 'react'
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
import DinamicCorse from '../../Pages/DinamikPages/DinamicCorse';
import TelimProqramlari from '../../Pages/TelimProqramlari/TelimProqramlari';
import TelimProqramlariMain from '../../Pages/TelimProqramlari/TelimProqramlariMain';
import BloqDetail from '../../Pages/BlogDetail/BloqDetail'
import MuraciyyetED from '../../Pages/muraciyyetET/MuraciyyetED';
import ScrollToTop from './ScrollTop';

const BASE_URL = 'https://api.softwarevillage.az/api/training-programs'



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

    const [offset, setOffSet] = useState(0)
    useEffect(() => {
        const handleScroll = (e) => {
            const scrolHeight = e.target.documentElement.scrolHeight
            const currentHeight = e.target.documentElement.scrollTop + window.innerHeight
            if (currentHeight + 1 >= scrolHeight) {
                setOffSet(offset + 10)
            }
        }
        window.addEventListener('load', handleScroll)
        return () => window.removeEventListener('load')
    }, [])


    return (
            <React.Fragment >
        <Routes>
                <Route path="/" element={<Home />}></Route>                 
                <Route path="/haqqimizda" element={<About />} />
                <Route path="/telimproqramlari" element={<TelimProqramlariMain />} />
                {/* <Route path="/telimproqramlari/:slug" element={<DinamicCorse />} /> */}
                <Route path="/kurslar/:slug/" element={<DinamicCorse />} />
                <Route path="/bloq" element={<Blog />} />

                <Route path="/bloq/:slug" element={<BloqDetail />} />

                <Route path="/kurslar" element={<Corse />} />
                {/* <Route path="/detailsCourse/:slug" element={< />} /> */}

                <Route path="/suallar" element={<Quastion />} />
                <Route path="/elaqe" element={<Contact />} />
                {/* <Route path="mobile" element={<MobilePrograming />} /> */}

                {/* <Route path="detail/:slug" element={<TelimProqramlari />} /> */}
                <Route path="detail/:slug/" element={<DinamicCorse />} />

                <Route path="*" element={<NoPage />} />
                <Route path="muraciyyet-et" element={<MuraciyyetED />} />
        </Routes>
            </React.Fragment>

    )
}

export default Routing

