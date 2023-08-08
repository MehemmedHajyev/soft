import React from 'react'
import CorseTime from '../../section/CorseTime'
import WhyWe from '../../section/WhyWe'
import DinamikHeader from './DinamikHeader/DinamikHeader'
import DinamikINfarmation from './DinamikINfarmation/DinamikINfarmation'
import Money from './money/Money'
import Sillabus from './Sillabus/Sillabus'

const DinamicCorse = () => {
  return (
    <div className='dinamik-container'>
      <DinamikHeader />
      <DinamikINfarmation />
      <Sillabus />

      <WhyWe className='sillabus-in-why-we'/>
      <Money />

    </div>
  )
}

export default DinamicCorse