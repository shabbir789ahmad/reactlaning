
import './App.css';
import './css/Header.css';
import './css/Banner.css';
import "./css/Footer.css";
import './css/Home.css';
import Header from "./myComponent/Header";
import About from "./myComponent/About";
import {Footer} from "./myComponent/Footer";
import {ErrorPage} from "./myComponent/ErrorPage";
import {Home} from "./myComponent/Home";
import {BrowserRouter, Routes ,Route} from "react-router-dom";

function App() {
  return (

    <>
    <BrowserRouter>
    <Header />
      <Routes>
       <Route path="/" element={<Home />} />
       <Route path="/about" element={<About />} />
       <Route path="/*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
    
    </>
  );
}

export default App;
