import React from 'react'
import image from '../../../Assets/about.png'
export const About = () => {
    return (
        <div className='about'>
            <h1 className='title'>About</h1>
            <section className="about-content">
                <img src={image} alt="" />
                <p><h3 style={{marginBottom:"10px"}}>Lorem ipsum dolor</h3>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta, vero. Incidunt alias nobis sit consectetur harum molestiae deserunt natus similique odit a voluptate?
                </p>
            </section>
        </div>

    )
}
