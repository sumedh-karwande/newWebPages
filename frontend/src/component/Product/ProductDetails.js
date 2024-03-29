import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import RatReactStarsing from "react-rating-stars-component";
import { Rating } from "@material-ui/lab";
import ReviewCard from "./ReviewCard.js";
import { getProductDetails } from "../../actions/productAction";
import { useParams } from "react-router-dom";
import Carousel from "react-material-ui-carousel";
import "./ProductDetails.css";
import Loader from "../layout/Loader/Loader";
import MetaData from "../layout/MetaData";

const ProductDetails = ({ match }) => {
	const { id } = useParams();
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getProductDetails(id));
	}, [dispatch, id]);
	console.log("id", match?.params?.id);
	// const options = {
	//   value: product.ratings,
	//   readOnly: true,
	//   precision: 0.5,
	// };
	const { product, loading, error } = useSelector(
		(state) => state.productDetails
	);
	console.log("Product details", product);
	return (
		<>
			{loading ? (
				<Loader />
			) : (
				<>   
				     <MetaData  title={`${product?.name} -- ECOMMERCE`} />
					<div className="ProductDetails">
						<div>
							<Carousel>
								{product?.images &&
									product?.images?.map((item, i) => (
										<img
											className="CarouselImage"
											key={i}
											src={item?.url}
											alt={`${i} Slide`}
										/>
									))}
							</Carousel>
						</div>
						<div>
							<div className="detailsBlock-1">
								<h2>{product?.name}</h2>
								<p>Product # {product?._id}</p>
							</div>
							<div className="detailsBlock-2">
								<Rating />
								{/* <RatReactStarsing {...options} /> */}
								<span className="detailsBlock-2-span">
									{" "}
									({product?.numOfReviews} Reviews)
								</span>
							</div>
							<div className="detailsBlock-3">
								<h1>{`₹${product?.price}`}</h1>
								<div className="detailsBlock-3-1">
									<div className="detailsBlock-3-1-1">
										<button>-</button>
										<input readOnly type="number" />
										<button>+</button>
									</div>
									<button disabled={product?.Stock < 1 ? true : false}>
										Add to Cart
									</button>
								</div>

								<p>
									Status:
									<b className={product?.Stock < 1 ? "redColor" : "greenColor"}>
										{product?.Stock < 1 ? "OutOfStock" : "InStock"}
									</b>
								</p>
							</div>

							<div className="detailsBlock-4">
								Description : <p>{product?.description}</p>
							</div>

							<button className="submitReview">Submit Review</button>
						</div>
					</div>

					<h3 className="reviewsHeading">REVIEWS</h3>
					{product?.reviews && product?.reviews[0] ? (
						<div className="reviews">
							{product?.reviews &&
								product?.reviews.map((review) => (
									<ReviewCard key={review?._id} review={review} />
								))}
						</div>
					) : (
						<p className="noReviews">No Reviews Yet</p>
					)}
				</>
			)}
		</>
	);
};
export default ProductDetails;
