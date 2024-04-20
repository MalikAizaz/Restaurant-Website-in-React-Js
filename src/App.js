import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Navbar from './Navbar/Navbar';
import Home from './Navbar/Home';
import About from './Navbar/About';
import Contact from './Navbar/Contact';
import Services from './Navbar/Services';
import Login from './Navbar/Login';
import SignUp from './Navbar/SignUp';
import WhatsAppChat from './Navbar/Wattsapp';
import { useState } from 'react';


const App = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchQueryChange = (query) => {
    setSearchQuery(query);
  };

  return (
    <Router>
      <Navbar onSearch={handleSearchQueryChange} />
      <Routes>
        <Route path="/" element={<Home searchQuery={searchQuery} />} />
        <Route path="/about" element={<About searchQuery={searchQuery} />} />
        <Route path="/contact" element={<Contact searchQuery={searchQuery} />} />
        <Route path="/services" element={<Services searchQuery={searchQuery} />} />
        <Route path="/login" element={<Login searchQuery={searchQuery} />} />
        <Route path="/signup" element={<SignUp searchQuery={searchQuery} />} />
      </Routes>
    </Router>
  );
};

export default App;






// const App = () => {
 
  
//   return (
//     <>
    
//     <Router>
      
//     <Navbar  />
        
//         <Routes>
//           <Route exact path="/" element={<Home />} />
//           <Route exact path="/About" element={<About />} />
//           <Route exact path="/Contact" element={<Contact />} />
//           <Route exact path="/Services" element={<Services />} />
//           <Route exact path="/login" element={<Login />} />
    
//           <Route exact path="/signup" element={<SignUp />} />
//         </Routes>

//      </Router>
     


      
  

//     </>

   
//   );
// };

// export default App;

