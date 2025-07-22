import React, { useState } from 'react'
import { Hero } from './Components/Hero'
import { About } from './Components/About'
import { Services } from './Components/Services'
import { CallToAction } from './Components/CallToAction'

export const Home = () => {

  const [model, setModel] = useState(false);
  

  return(
    <div className='component'>
      <Hero/>
      <About/>
      <Services/>
      <CallToAction/>
    </div>
  )
}
