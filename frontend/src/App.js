
import './App.css';
import Header from './component/layout/Header/Header';
import { BrowserRouter, Routes, Route } from "react-router-dom"; 
// import { BrowserRouter as Router ,Route ,Switch} from "react-router-dom";
import { useEffect } from 'react';
import WebFont from 'webfontloader';
import Footer from './component/layout/Footer/Footer';
import Home from "./component/Home/Home";
import ProductDetails from "./component/Product/ProductDetails";
import Products from "./component/Product/Products";
import Search from "./component/Product/Search";
import LoginSignUp from './component/User/SignupLogin';


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
      <Route exact path="/product/:id" element={<ProductDetails />}></Route>
      <Route exact path="/products" element={<Products/>} />
      <Route  path="/products/:keyword" element={<Products/>} />
      <Route exact path="/search" element={<Search/>} />
      <Route exact path="/login" element={<LoginSignUp/>} />
      </Routes> 
      <Footer /> 
  </BrowserRouter>

  
       
  );
}

export default App;
