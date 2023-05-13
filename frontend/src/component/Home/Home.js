import React, { Fragment, useEffect } from "react";
import MetaData from "../layout/MetaData";
import "./Home.css";
import ProductCard from "./ProductCard";
// import axios from "axios" ;
import {getProduct} from "../../actions/productAction";
import { useDispatch, useSelector } from "react-redux";
// import { CgMouse } from "react-icons/all";


const product = {
	name: "Blue T-shirt",
	images: [{ url: "https://www.gstatic.com/webp/gallery/1.jpg" }],
	price: "₹3000",
	_id: "sumedh",
};


const Home = () => {
	// const [data, setdata] = useState();
	const dispatch = useDispatch();
	useEffect (()=>{
		dispatch(getProduct());
	},[dispatch])
	
const {loading,error,productsCount,products} = useSelector((state)=>state.products);
console.log("products",products);


	return (
		<Fragment>
			<MetaData title="Ecommerce" />
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
			{products &&
              products.map((product) => (
                <ProductCard key={product._id} product={product} />
              ))}
			</div>
		</Fragment>
	);
};

export default Home;
