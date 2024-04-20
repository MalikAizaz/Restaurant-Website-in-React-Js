import React from 'react'
import Background from '../Backgroung Image/Background'
import Links from '../Card/Links'
import Footer from '../Footer/Footer'
import VideoPlayer from './Video'
import Horizontal from '../Horizontal Cards/HorizontalLinks'
import './Home.css'
import { useState } from 'react'
import { useEffect } from 'react'
// import Popup from './PopUp'
import About from './About'
import MapComponent from '../Map Component/Map'

const Home = () => {

  

    

  return (
    <>
 



      <Background /> 
      <Links />
      {/* <About/> */}
      <Horizontal/>
      <VideoPlayer />
      <Links />
      <MapComponent />

      <div className="image-container">
      <img
        src="https://picsum.photos/400/400?grayscale"
        alt="This is a pics"
        className="responsive-image"
      />
      
      <div className="image-text-overlay">
        <p className="overlay-text">Bahria town Lahore</p>
      </div>
      
    </div>
      <Footer/>

    

      
    </>
  )
}

export default Home;


// const Home = ({ searchQuery }) => {
//   // Sample content
//   const content = `
//   Pizza Hut is basically an American restaurant chain and international franchise with nearly 12,000 restaurants that offers different styles of pizza along with side dishes. Pizza Hut keeps one step ahead of its competitors by continuously introducing new products in the market. elow is a map that shows the Services, Clients, and Products o

//   `;

//   // Highlight matching words
//   const highlightedContent = searchQuery
//     ? content.replace(new RegExp(`(${searchQuery})`, 'gi'), '<mark>$1</mark>')
//     : content;

//   return (
//     <>
    
//     <Background/>
//     <Links />
//       <Horizontal/>
//        <VideoPlayer />
       
      
//         <Links />
//     <div className="image-container">
//     <img
//         src="https://picsum.photos/500/300?grayscale"
//         alt="This is a pics"
//         className="responsive-image"
//       />
      
//       <div className="image-text-overlay">
//         <p className="overlay-text">Bahria town Lahore</p>
//       </div>
      
//     </div>
//     <div className="page">
    
//       <p dangerouslySetInnerHTML={{ __html: highlightedContent }} />
//     </div>
//       <Footer/>

//     </>
//   );
// };

// export default Home;
