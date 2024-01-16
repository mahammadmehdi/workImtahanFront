import React from 'react'
import OverPlatform from '../../components/OverPlatform'
import FeaturesHero from '../../components/FeaturesHEro'
import { Helmet } from 'react-helmet-async'
import FacultyMembers from '../../components/FacultyMembers'
import FannySpencer from '../../components/FannySpencer'

function Home() {
  return (
    <div>
        <Helmet>
        <title>Home</title>
      </Helmet>
        <OverPlatform></OverPlatform>
        <FeaturesHero></FeaturesHero>
        <FacultyMembers></FacultyMembers> 
        <FannySpencer></FannySpencer>
    </div>
  )
}

export default Home