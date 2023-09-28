import React from 'react'
import "../../assets/css/style.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from "../../components/nav";
import Header from '../Header/Header';
import Footer from "../../components/footer";
import Exploration from "../../pages/exploration";
import Interactives from "../../pages/interactives"
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainHome from '../../pages/MainHome';
import Layout from './Layout';

const MainLayout = () => {
  return (
    
    <>
          <NavBar/>    
          {/* <Header/> */}
          <Routes>
            <Route path="/" element={<MainHome />}/>
            <Route path="/Explorations" element={<Exploration/>}/>
            <Route path="/Interactives" element={<Interactives/>}/>
            <Route path="/Shop" element={<Layout/>}/>
          </Routes> 
          <Footer/>
      </>
  )
}

export default MainLayout;