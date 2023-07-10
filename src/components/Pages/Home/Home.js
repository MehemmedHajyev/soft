import React from 'react'
import MainCarusel from '../../section/MainCarusel'
import Training from '../../section/Training'
import HomeAbout from '../../section/HomeAbout'
import WhyWe from '../../section/WhyWe'
import WeTeam from '../../section/WeTeam'
import AboutWe from './AboutWe'
import BloqContent from '../../section/blog-content/BloqContent';

import TeamSliderItems from '../../section/TeamSliderItems'
import PartniyorSlider from '../../Sliders/PartniyorSlider'
import Partniyorlar from '../../section/Partniyorlar'
const Home = (traningText) => {
    return (
        <>
             <MainCarusel />
            <Training  traningText={'Təlim proqramları'} />
            <HomeAbout />
            <AboutWe />
            <WhyWe />
            < Partniyorlar/>
            <WeTeam />
            <TeamSliderItems />
            <BloqContent />

         

            
        </>
    )
}

export default Home