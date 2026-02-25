import './css/styles.css'

import { useEffect, useRef } from "react";
import { 
  BrowserRouter,
  Navigate,
  Route,
  Routes } 
from "react-router-dom";
import axios from "axios";

import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';

import Index from './components/Index.jsx';
import Excursiones from './components/Excursiones.jsx';

import Information from './components/Information.jsx';
import Contact from './components/Contact.jsx';
import Login from './components/Login.jsx';
import Register from './components/Register.jsx';


export default function App() {

  //   async function getData(){
  //     try {
  //     const res = await axios.get(
  //         "http://localhost/api/meeting"
  //     );

  //     return res.data;

  //     } catch (error) {
  //         console.error(error);
  //     }
  // };

  // useEffect(()=>{
  //     async function fetchData() {
  //     const data = await getData(); 
  //     console.log(data); 
  //     }

  //     fetchData();   
  // },[])

  return (
    <>
      <BrowserRouter> 
      
        <Header />

          <Routes>

          <Route path="*" element={<Navigate replace to="/"/>}/>
          <Route path="/" element={<Index/>} />
          <Route path="/information" element={<Information/>}/>
          <Route path="/contact" element={<Contact/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<Register/>} />
          
          { /* <Route path="/excursiones" element={<Excursiones/>} />
           />
          <Route path="/contact" element={<Contact/>} />
          
           */}

          </Routes> 

        <Footer/>

      </BrowserRouter>
    </>
  )
}
