import React, { useEffect, useLayoutEffect } from 'react';

import Layout from "./components/Layout/Layout";
import './assets/font-awesome/css/font-awesome.css';
import './assets/font-awesome/css/font-awesome.min.css'; 
import './assets/font-awesome/css/font-awesome.min.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './assets/Css/global.css';
import Routing from "./components/Layout/Routing/Routing";
import { BrowserRouter } from "react-router-dom";
import TemirPage from "./components/Pages/TemirPage";
import MuraciyyetED from "./components/Pages/muraciyyetET/MuraciyyetED";
import ScrollToTop from './components/Layout/Routing/ScrollTop';
import DinamicCorse from './components/Pages/DinamikPages/DinamicCorse';

function App() {  

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [window.location.pathname]);
  return (
    <>
     {/* <BrowserRouter>
      <Layout>
        <ScrollToTop />
        <Routing />
      </Layout>
      </BrowserRouter> */}
      <DinamicCorse />
      
    </>
  );
}

export default App;
