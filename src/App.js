
import Layout from "./components/Layout/Layout";
import './assets/font-awesome/css/font-awesome.css';
import './assets/font-awesome/css/font-awesome.min.css'; 
import './assets/font-awesome/css/font-awesome.min.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './assets/Css/global.css';
import Routing from "./components/Layout/Routing/Routing";
import { BrowserRouter } from "react-router-dom";
import ScrollToTop from './components/Layout/Routing/ScrollTop';
import TemirPage from "./components/Pages/Temir/TemirPage";

function App() {  

  return (
    <>
     <BrowserRouter>
      <Layout>
        <ScrollToTop />
        <Routing /> 
      </Layout>
      </BrowserRouter>      
      {/* <TemirPage /> */}
    </>
  );
}

export default App;
