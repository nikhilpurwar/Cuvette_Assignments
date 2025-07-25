// import React from 'react'
// import { Header } from '../../Components/Header/Header'
// import { Footer } from '../../Components/Footer/Footer'
// import { Cards } from './components/Cards';

// export const Pricing = () => {
//   return (
//     <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
//       <Header heading="Pricing Page" />
//       <Footer />
//       <div>
//         <h1 style={{ textAlign: 'center' }}>Pricing</h1>
//         <Cards />
//       </div>
//     </div>
//   )
// }


import React from 'react';
import { Header } from '../../Components/Header/Header';
import { Footer } from '../../Components/Footer/Footer';
import { Cards } from './components/Cards'; // ✅ Fixed typo

export const Pricing = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
      <Header heading="Pricing Page" />
      <div>
        <h1 style={{ textAlign: 'center' }}>Pricing</h1>
        <Cards />
      </div>
      <Footer />
    </div>
  );
};
