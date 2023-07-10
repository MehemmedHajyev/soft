import React, { useEffect, useState } from 'react';
import Accordion from '../../section/Test/Acardion';
import img1 from '../../../assets/img/header-imgs/about-bcg.png'
import BredCramp from '../../section/BredCramp/BredCramp'
import axios from 'axios';
import QuastionHeader from './QuastionHeader';

const BASE_URL = 'https://api.softwarevillage.az/api/core/faq'


const Quastion = () => {
    const [questions, setQuestions] = useState([])

    const getQuestions = async () => {
        const res = await axios.get(BASE_URL)
        const data = await res.data
        setQuestions(data)
    }

    useEffect(() => {
        getQuestions()
    }, [])



    //////////

    

    return (
        <div>
            <QuastionHeader />
            <Accordion items={questions} />
        </div>
    );
};

export default Quastion;
