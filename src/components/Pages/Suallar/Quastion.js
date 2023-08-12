import React, { useEffect, useState } from 'react';
import Accordion from '../../section/Test/Acardion';
import axios from 'axios';
import QuastionHeader from './QuastionHeader';
import Partniyorlar from '../../section/Partniyorlar';

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
            <Partniyorlar />
        </div>
    );
};

export default Quastion;
