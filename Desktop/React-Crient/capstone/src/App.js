import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from './Capstone/Main';
import About from './Capstone/About';
import Contact from './Capstone/Contact';
import Nav from './Capstone/Nav';
import Recommend from './Capstone/Recommend';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
      <div> 
    </div>
    </BrowserRouter>
    


    
  );
}

export default App;
