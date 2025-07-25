import React from 'react'
import './header.css'
import videoEarth from '../../Assets/space0.mp4'
// export const Header = () => {
//   return (
//     <div className='header'>
//       <video src={videoEarth} autoPlay muted loop></video>
//       <div className="content">
//         <h1>Lorem ipsum dolor sit amet.</h1>
//         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, excepturi.</p>
//       </div>
//     </div>
//   )
// }

export const Header = ({heading}) => {
  return (
    <section className="hero-section">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="background-video"
      >
        <source src={videoEarth} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="hero-content">
        <h1>{heading}</h1>
      </div>
    </section>
  );
};

