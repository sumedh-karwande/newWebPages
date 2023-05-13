
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import {getProductDetails} from '../../actions/productAction';
import {useParams} from 'react-router-dom';

const ProductDetails = ({ match })=>{
    const [details ,setdetails]=useState('');
    const {id} =useParams();
    const dispatch=useDispatch();
    // useEffect(()=>{
    //     fetch('http://localhost:4000/api/v1/product/:id').then((req)=>req.json()).then((json)=>setdetails(json)).catch((err)=>console.log(err));
    // },[])
    // console.log("productDetails api",details);
    useEffect(()=>{
     dispatch(getProductDetails(id))
    },[dispatch,id]);
    console.log("id",match?.params?.id);
    // const {product,error}=useSelector((state)=>state.product)
    const { product, loading, error } = useSelector(
      (state) => state.productDetails
    );
    console.log("Product details",product )
    return(
      <h1>Hello</h1>
    );
};
export default ProductDetails;