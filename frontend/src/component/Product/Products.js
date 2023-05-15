import react, { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { useLocation } from 'react-router-dom';
import { clearErrors, getProduct } from "../../actions/productAction";
import Loader from "../layout/Loader/Loader";
import ProductCard from "../Home/ProductCard";
import MetaData from "../layout/MetaData";
import "./Products.css";

const Products = ({ match }) =>{
    const dispatch =useDispatch();
    // const { keyword } = useParams();
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const myParam = window.location.href
    const {products,loading,error}=useSelector((state)=>state.products);
    const {searchInput}=useSelector((state)=>state.serachProduct);
    const keyword = match?.params?.keyword;
    console.log("searchInput",searchInput);
    useEffect(()=>{
        if (error) {
            alert.error(error);
            dispatch(clearErrors());
          }
          dispatch(getProduct(searchInput));
        }, [dispatch, searchInput,error]);
        console.log("Products page",products);
       
    return(<>
      {loading ? (
        <Loader />
      ) : (
        <>
          <MetaData title="PRODUCTS -- ECOMMERCE" />
          <h2 className="productsHeading">Products</h2>

          <div className="products">
            {products &&
              products.map((product) => (
                <ProductCard key={product._id} product={product} />
              ))}
          </div>
          </>
      )}
    </>);
}
export default Products;