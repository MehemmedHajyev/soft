import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faTimes } from '@fortawesome/free-solid-svg-icons';

const Accordion = ({ items }) => {
    const [activeIndex, setActiveIndex] = useState(null);
    const [activeIndexTWo, setactiveIndexTWo] = useState(null);


    const handleClick = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };
    const handleClickTwo = (index) => {
        setactiveIndexTWo(activeIndexTWo === index ? null : index);
    };


    return (

        <div className='acardion-container'>
            <div className="accordion">
                {items.slice(0, Math.ceil(items.length / 2)).map((item, index) => (
                    <div
                        className={`accordion-item ${activeIndex === index ? 'active' : ''}`}
                        key={index}
                    >
                        <div
                            className={`accordion-title ${activeIndex === index ? 'active' : ''}`}
                            onClick={() => handleClick(index)}
                        >
                            {item.question}
                            <FontAwesomeIcon
                                icon={activeIndex === index ? faTimes : faPlus}
                                className="accordion-icon"
                                style={{
                                    backgroundColor: activeIndex === index ? '#2196F3' : 'transparent',
                                    color: activeIndex === index ? '#FFF' : '#2196F3',
                                    fontSize: '14px'
                                }}
                            />
                        </div>
                        {activeIndex === index && (
                            <div className="accordion-content">
                                {item.answer}
                            </div>
                        )}
                    </div>
                ))}

            </div>





            <div className="accordion">
                {items.slice(Math.floor(items.length / 2) === items.length / 2 ? Math.floor(items.length / 2) : Math.floor(items.length / 2) + 1, items.length).map((item1, index) => (
                    <div
                        className={`accordion-item ${activeIndexTWo === index ? 'active' : ''}`}
                        key={index}
                    >
                        <div
                            className={`accordion-title ${activeIndexTWo === index ? 'active' : ''}`}
                            onClick={() => handleClickTwo(index)}
                        >
                            {item1.question}
                            <FontAwesomeIcon
                                icon={activeIndexTWo === index ? faTimes : faPlus}
                                className="accordion-icon"
                                style={{
                                    backgroundColor: activeIndexTWo === index ? '#2196F3' : 'transparent',
                                    color: activeIndexTWo === index ? '#FFF' : '#2196F3'
                                }}
                            />
                        </div>
                        {activeIndexTWo === index && (
                            <div className="accordion-content">
                                {item1.answer}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>


    );
};

export default Accordion;
