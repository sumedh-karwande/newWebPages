
import './App.css';
import Header from './component/layout/Header/Header';
import { BrowserRouter, Routes, Route } from "react-router-dom"; 
// import { BrowserRouter as Router ,Route ,Switch} from "react-router-dom";
import { useEffect } from 'react';
import WebFont from 'webfontloader';
import Footer from './component/layout/Footer/Footer';
import Home from "./component/Home/Home";

function App() {
  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Roboto", "Droid Sans", "Chilanka"],
      },
    });
;
  }, []);
  return (
    <BrowserRouter>
    <Header />
    <Routes>
      <Route exact path="/" element={<Home />}></Route>
      </Routes> 
      <Footer /> 
  </BrowserRouter>

  
       
  );
}

export default App;
