import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { Modal } from  './Modal'

export const CallToAction = () => {

    const [model, setModel] = useState(false);
    const handleClick = () => {
        setModel(!model);
    }

    return (
        <section className="knowMore">
            <h2 className='title'>Hurry Up Book Your Ticket Now</h2>
            <div className="buttons" onClick={handleClick}>
                <Link >Know More</Link>
                {
                    model && <Modal/>
                }
            </div>
        </section>

    )
}
