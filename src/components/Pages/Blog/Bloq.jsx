import React from 'react';

import img1 from '../../../assets/img/header-imgs/about-bcg.png'
import BloqContent from '../../section/blog-content/BloqContent';
import BredCramp from '../../section/BredCramp/BredCramp'


const Bloq = () => {
  return (
    <>
      <BredCramp title='blog' text="text"  image={img1}/>
      <BloqContent />
    </>

  )
}

export default Bloq