import React from "react";
import {BrowserRouter,Route,Link,Routes} from 'react-router-dom'
import Menu from "./Components/Menu/Menu";
import Home from './Page/HomePage/HomePage'
import About from "./Page/AboutPage/About";
import Contact from "./Page/ContactPage/Contact";
import Corona from "./Page/CoronaPage/Corona";
import Registr from "./Page/RegistrPage/Registr";


export default function App() {
  return (
   <BrowserRouter>
   <Menu/>
     <Routes>
        <Route path='/' element={<Home />}/>
        <Route exact path='/AboutPage'  element={<About/>} />
        <Route exact path='/ContactPage'  element={<Contact/>}/>
        <Route exact path='/CoronaPage' element={<Corona/>}/>
        <Route exact path='/RegistrPage' element={<Registr/>}/>
     </Routes>
   </BrowserRouter>
  );
}


