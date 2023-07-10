import Layout from "./components/Layout/Layout";
import './assets/font-awesome/css/font-awesome.css';
import './assets/font-awesome/css/font-awesome.min.css'; 
import './assets/font-awesome/css/font-awesome.min.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './assets/Css/global.css';
import Routing from "./components/Layout/Routing/Routing";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <>
     <BrowserRouter>
      <Layout>
        <Routing />
      </Layout>
      </BrowserRouter>

    </>
  );
}

export default App;
