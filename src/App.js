import React from "react";
import './index.css'
import { Routes, Route} from 'react-router-dom';
import Home from './routes/Home';
import About from './routes/About';
import Contact from './routes/Contact';
import Project from './routes/Project';


function App() {
  return (
   <>
   
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/Project' element={<Project/>} />
      <Route path='/About' element={<About/>} />
      <Route path='/Contact' element={<Contact/>} />
    </Routes>
   
   </>
  );
}

export default App;
