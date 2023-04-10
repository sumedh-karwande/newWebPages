import React from "react";
import { Link } from "react-router-dom";
import RatReactStarsing from "react-rating-stars-component"
import { Rating } from "@material-ui/lab";

const ProductCard = ({ product }) => {
  const options = {
    value: product.ratings,
    readOnly: true,
    precision: 0.5,
  };
  return (
    <Link className="productCard" to={`/product/${product._id}`}>
      <img src={product.images[0].url} alt={product.name} />
      <p>{product.name}</p>
      <div>
        <RatReactStarsing {...options} />{" "}
        <span className="productCardSpan">
          {" "}
          ({product.numOfReviews}5 Reviews)
        </span>
      </div>
      <span>{`${product.price}`}</span>
    </Link>
  );
};

export default ProductCard;