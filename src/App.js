import React, { useState, Suspense, lazy } from 'react';
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  } from "react-router-dom";
import Sidebar from './components/SideBar/SideBar';
import NavBar from "./components/NavBar/NavBar";
import About from "./components/About/About";
import Webinars from "./components/Webinars/Webinars";
import Products from "./components/Products/Products";
import Book from "./components/Book/Book";
import styled from "styled-components";

import Footer from "./components/Footer/Footer";
import ContactForm from './components/ContactForm/ContactForm';


const LazyHome = lazy(() => import("./components/Home/Home"))
const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const MainContent = styled.div`
  flex: 1;
  /* padding: 0 24px; */
  max-width: 1300px;
  margin: 0 auto;
  @media screen and (max-width: 768px){
    max-width: 500px;
    
  }
`;


function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <Suspense fallback={<div>Loading</div>}>

    <Router>
    <AppContainer>

  
      <Sidebar isOpen={isOpen} toggle={toggle} />

      <NavBar toggle={toggle}/>
      <MainContent>

      <Routes>
        <Route exact path="/" element={<LazyHome />} />
        <Route path="/about" element={<About />} />
        <Route path="/webinars" element={<Webinars />} />
        <Route path="/products" element={<Products />} />
        <Route path="/book" element={<Book />} />
        <Route path="/contact" element={<ContactForm />} />

      </Routes>
      </MainContent>

      <Footer />
      </AppContainer>
    </Router>
    </Suspense>

  );
}

export default App;
