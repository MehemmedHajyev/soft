import axios from 'axios';
import { useEffect, useState } from 'react';
import CountComp from './CountComp';

const BASE_URL = 'https://api.softwarevillage.az/api/core/home_digits';

const AboutWe = () => {
    const [digits, setDigits] = useState([]);

    const getDigits = async () => {
        try {
            const res = await axios(BASE_URL);
            const data = await res.data;

            // Log the data before conversion
            console.log("Data before conversion:", data);

            // Convert the number from string to number type
            const digitsWithData = data.map(item => ({
                ...item,
                number: parseInt(item.number), // or parseFloat(item.number) if you expect floating-point numbers
            }));

            // Log the data after conversion
            console.log("Data after conversion:", digitsWithData);

            setDigits(digitsWithData);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    useEffect(() => {
        getDigits();
    }, []);



    return (
        <div className='about-we-home'>
            <div className="about-we-home-content">
                {digits.map((item, index) => (
                    <CountComp
                        key={item.id}
                        item={item}
                        countValue={item?.number}
                        count={item?.number > 400 ? item?.number - 100 : 0}
                    />
                ))}

            </div>
        </div>
    );
};

export default AboutWe;
