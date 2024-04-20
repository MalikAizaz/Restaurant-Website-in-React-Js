import React from 'react'
// import Card from '../Card/Card';
import Footer from '../Footer/Footer';
// import { Link } from 'react-router-dom';
import Links from '../Card/Links';
import WhatsAppChat from './Wattsapp';
import Background from '../Backgroung Image/Background';
import Horizontal from '../Horizontal Cards/HorizontalLinks';
import { Link } from 'react-router-dom';
import Home from './Home';

const About = () => {
  const phoneNumber = '+923088007636';
  return (
    <> 
    {/* <Background /> */}
    <WhatsAppChat phoneNumber={phoneNumber} />
   <Horizontal/>
   <Links/>
   {/* <Home /> */}
    </>
  )
}

export default About;
