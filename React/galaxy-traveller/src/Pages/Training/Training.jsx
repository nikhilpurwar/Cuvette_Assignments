import React from 'react'
import { Header } from '../../Components/Header/Header'
import { Footer } from '../../Components/Footer/Footer'
import { About } from '../Home/Components/About'

export const Training = () => {
  return (
    <div style={{display: 'flex', flexDirection:'column', gap:'40px'}}>
      <Header heading = "Training Page"/>
      <About/>
      <Footer />
    </div>
  )
}
