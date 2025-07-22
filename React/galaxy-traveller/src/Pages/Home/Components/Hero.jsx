import React from 'react'
import video from '../../../Assets/space.mp4'
import '../Home.css'
import { Link } from 'react-router-dom'

export const Hero = () => {
  return (
    <div className='back'>
        <video src={video} autoPlay loop muted></video>
        <div className="content">
            <h1>Travel. Galaxies.</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet autem obcaecati accusamus in non, ipsum cumque temporibus.</p>
            
            <div className="buttons">
                <Link to = '/training'>Training</Link>
                <Link to = '/contact'>Contact</Link>
            </div>
        </div>
    </div>
  )
}
