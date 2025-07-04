import React from 'react'
import { BrowserRouter } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Main from './components/Main';
import About from './components/pages/About';
import Stories from './components/pages/Stories';
import Btn1 from './components/pages/Btn1';
import Register from './components/pages/Register';
import Contact from './components/pages/Contact';
import Bottom from './components/Bottom ';



const App = () => {
  return (
   <>
   <BrowserRouter>
     
      <Navbar/>
     
    

    
      <Routes>
       <Route path="/" element={
          <>
            <Hero />
            <Main />
          </>
        } />
      <Route path="/about" element={<About/>} />
      <Route path="/Btn1" element={<Btn1/>} />
       <Route path="/Register" element={<Register/>} />
        <Route path="/Contact" element={<Contact/>} />
        <Route path="/stories" element={<Stories/>} />
     </Routes>
       
        <Bottom/>
      

   </BrowserRouter>
   

   </>
  )
}

export default App;

