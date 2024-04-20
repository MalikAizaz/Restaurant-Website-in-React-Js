import React from 'react'
import Links from '../Card/Links';
import Footer from '../Footer/Footer';
import WhatsAppChat from './Wattsapp';
import Background from '../Backgroung Image/Background';

const Services = () => {
  const phoneNumber = '+923088007636';
  return (
    <>
    <Background />
    <WhatsAppChat phoneNumber={phoneNumber} />
    <Links/>
    <Footer/>
    </>
  )
}

export default Services;
