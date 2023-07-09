import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import HeroImage2 from '../components/HeroImage2'
// import PricingCard from '../components/PricingCard'
import Work from '../components/Work'

const Project = () => {
  return (
    <div>
      <Navbar/>
      <HeroImage2  heading="PROJECTS" text="Have a look over some of my recently created projects below"/>
      <Work/>
      {/* <PricingCard/> */}
      <Footer/>
    </div>
  )
}

export default Project