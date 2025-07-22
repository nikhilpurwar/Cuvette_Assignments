import React from 'react'
import { Link } from 'react-router-dom'

export const CallToAction = () => {
  return (

    <section className="knowMore">
        <h2 className='title'>Hurry Up Book Your Ticket Now</h2>
        <div className="buttons">
            <Link to = '/training'>Know More</Link>
        </div>
    </section>    

  )
}
