import React from 'react'
import CorseTime from '../../section/CorseTime'
import Training from '../../section/Training'
import WhyWe from '../../section/WhyWe'
import DinamikHeader from './DinamikHeader/DinamikHeader'
import DinamikINfarmation from './DinamikINfarmation/DinamikINfarmation'
import IsElanlari from './IsElanlari/IsElanlari'
import Money from './money/Money'
import Sillabus from './Sillabus/Sillabus'
import Teaching from './Teaching/Teaching'

const DinamicCorse = () => {
  return (
    <div className='dinamik-container'>
      <DinamikHeader />
      <DinamikINfarmation />
      <Sillabus />
      <CorseTime />
      <Teaching />

      <WhyWe className='sillabus-in-why-we'/>
      <IsElanlari />
      <Money />

      <Training traningText={'Digər Kurslar'} />

    </div>
  )
}

export default DinamicCorse