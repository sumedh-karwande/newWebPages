import react, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { clearErrors, getProduct } from "../../actions/productAction";
import Loader from "../layout/Loader/Loader";
import ProductCard from "../Home/ProductCard";
import MetaData from "../layout/MetaData";
import "./Products.css";
import { Button } from "@material-ui/core";

const Products = () => {
	const dispatch = useDispatch();
	const [currentPage, setCurrentPage] = useState(1);
	const [totalPages, settotalPage] = useState(0);
	const { products, loading, error, resultPerPage, productsCount } =
		useSelector((state) => state.products);
	const { searchInput } = useSelector((state) => state.searchProduct);
	useEffect(() => {
		if (error) {
			alert.error(error);
			dispatch(clearErrors());
		}
		dispatch(getProduct(searchInput));
	}, [dispatch, searchInput, error]);
	console.log("products", products);
	const itemsPerPage = 5;
	useEffect(() => {
		settotalPage(Math.ceil(products.length / itemsPerPage));
	});
	console.log("totalPage Products page", totalPages);
	const handlePageChange = (newPage) => {
		setCurrentPage(newPage);
	};
	const handleNextClick = () => {
		if (currentPage < totalPages) {
			setCurrentPage(currentPage + 1);
		}
	};
	const handlePrevClick = () => {
		if (currentPage > 1) {
			setCurrentPage(currentPage - 1);
		}
	};
	console.log("currentPage", currentPage);
	//
	const preDisabled = currentPage === 1;
	const nextDisabled = currentPage === totalPages;

	// const itemsPerPage = 5;
	const startIndex = (currentPage - 1) * itemsPerPage;
	const endIndex = startIndex + itemsPerPage;
	const ProductToDiaplay = products.slice(startIndex, endIndex);
	const pageNumbers = [];

	for (let i = 1; i <= totalPages; i++) {
		pageNumbers.push(i);
	}
	console.log("pageNumbers", pageNumbers);

	return (
		<>
			{loading ? (
				<Loader />
			) : (
				<>
					<MetaData title="PRODUCTS -- ECOMMERCE" />
					<h2 className="productsHeading">Products</h2>

					<div className="products">
						{ProductToDiaplay &&
							ProductToDiaplay.map((product) => (
								<ProductCard key={product._id} product={product} />
							))}
					</div>
					{totalPages > 1 && (
						<div className="paginationBox">
							<Button onClick={handlePrevClick} disabled={preDisabled}>
								Prev
							</Button>
							{Array.from({ length: totalPages }, (_, i) => {
								return (
									<Button
										onClick={() => handlePageChange(i + 1)}
										key={i}
										disabled={i + 1 === currentPage}>
										{i + 1}
									</Button>
								);
							})}

							<Button onClick={handleNextClick} disabled={nextDisabled}>
								Next
							</Button>
						</div>
					)}
				</>
			)}
		</>
	);
};
export default Products;
