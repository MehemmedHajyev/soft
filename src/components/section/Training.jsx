import React, { useEffect, useState } from 'react'
import TrainingSlider from '../Sliders/TrainingSlider'
import { Link, useNavigate, useParams } from 'react-router-dom'

import axios from 'axios'

const BASE_URL = 'https://api.softwarevillage.az/api/training-programs'


const Training = ({ traningText }) => {
  const navigate = useNavigate()

  const [training, setTraining] = useState([])

  const getTraining = async () => {
    const res = await axios.get(BASE_URL)
    const data = await res.data
    setTraining(data)
    // console.log(data, 'kerimmm');
  }
  useEffect(() => {
    getTraining()
  }, [])

  return (<>
    <div className='trainig'>
      <h1>{traningText}</h1>
    </div>

    {training.length > 0 ? (
      <TrainingSlider className="traainig-container">
        {training.map((item, index) => (
          <a key={index} onClick={() => navigate(`/detail/${item.slug}`)} >
            <div className='trainig-card'>
              <div className="trainig-card-content">
                <h3>{item.title}</h3>
              </div>
              <div className="trainig-card-icons locktrainig-card-icons lock">
                {item?.main_image && (
                  <img src={`https://api.softwarevillage.az${item.main_image}`} alt={`Image for ${item.title}`} />
                )}
              </div>
            </div>
          </a>
        ))}
      </TrainingSlider>
    ) : (
      <p>No training data available.</p>
    )}

  </>

  )
}

export default Training
