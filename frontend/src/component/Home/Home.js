import React, { Fragment, } from "react";
import "./Home.css";
import ProductCard from "./ProductCard";
// import { CgMouse } from "react-icons/all";

const product = {
    name :"Blue T-shirt" ,
    images :[{url:"https://www.gstatic.com/webp/gallery/1.jpg"}] ,
    price :"₹3000" ,
    _id :"sumedh"
}

const Home = () => {

  return (
        <Fragment>
        

          <div className="banner">
            <p>Welcome to Ecommerce</p>
            <h1>FIND AMAZING PRODUCTS BELOW</h1>

            <a href="#container">
              <button>
                Scroll 
                {/* <CgMouse /> */}
              </button>
            </a>
          </div>

          <h2 className="homeHeading">Featured Products</h2>
          <div className="container" id="container">
            
                <ProductCard  product={product} />
                <ProductCard  product={product} />
                <ProductCard  product={product} />
                <ProductCard  product={product} />
                <ProductCard  product={product} />
                <ProductCard  product={product} />
                <ProductCard  product={product} />
             
          </div>
         
        </Fragment>
   );
};

export default Home;