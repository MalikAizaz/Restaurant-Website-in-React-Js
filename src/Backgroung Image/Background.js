import React from 'react';
import './Background.css'; // Import your CSS file for background styles
import SearchBar from '../Search/Search';
// import SearchPage from '../Search/Search';
import WhatsAppChat from '../Navbar/Wattsapp';

const Background = () => {
  
  const phoneNumber = '+923088007636';
  return (
    <>
    <div className="background-container">

    <h1 className='heading'>Best Resturent In Our Gujranwala City</h1>
      <div>
      <WhatsAppChat phoneNumber={phoneNumber} />
      </div>
      <div>
      {/* <SearchBar /> */}
      </div>
      {/* Content goes here */}
    </div>
    <div className='Services'>
      <h1>Our Services</h1>
      <p>Pizza Hut is basically an American restaurant chain and international franchise with nearly 12,000 restaurants that offers different styles of pizza along with side dishes.
      Pizza Hut keeps one step ahead of its competitors by continuously introducing new products in the market. elow is a map that shows the Services, Clients, and Products o</p>
    </div>
    </>
  );
};

export default Background;
