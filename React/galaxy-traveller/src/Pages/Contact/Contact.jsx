import React from 'react';
import { Header } from '../../Components/Header/Header';
import { Footer } from '../../Components/Footer/Footer';
import { ContactForm } from './components/ContactForm';

export const Contact = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
      <Header heading={<ContactForm />} />
      {/* <ContactForm /> */}
      <Footer />
    </div>
  );
};
