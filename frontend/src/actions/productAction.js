import axios from "axios";

import {
	ALL_PRODUCT_REQUEST,
	ALL_PRODUCT_FAIL,
	ALL_PRODUCT_SUCCESS,
	PRODUCT_DETAILS_SUCCESS,
	PRODUCT_DETAILS_FAIL,
	PRODUCT_DETAILS_REQUEST,
	CLEAR_ERRORS,
} from "../constant/productConstant";

// Get All Products
export const getProduct =
	(searchInput = "", price = [0, 25000], category) =>
	async (dispatch) => {
		try {
			dispatch({ type: ALL_PRODUCT_REQUEST });
			// const {data} = await axios.get("http://localhost:4000/api/v1/products");
			let link = `http://localhost:4000/api/v1//products?keyword=${searchInput}&price[gte]=${price[0]}&price[lte]=${price[1]}`;

			if (category) {
				link = `http://localhost:4000/api/v1//products?keyword=${searchInput}&price[gte]=${price[0]}&price[lte]=${price[1]}&category=${category}`;
			}

			const { data } = await axios.get(link);
			dispatch({
				type: ALL_PRODUCT_SUCCESS,
				payload: data,
			});
		} catch (error) {
			dispatch({
				type: ALL_PRODUCT_FAIL,
				payload: error?.response?.data?.message,
			});
		}
	};

// Get Products Details
export const getProductDetails = (id) => async (dispatch) => {
	try {
		dispatch({ type: PRODUCT_DETAILS_REQUEST });

		const { data } = await axios.get(
			`http://localhost:4000/api/v1/product/${id}`
		);

		dispatch({
			type: PRODUCT_DETAILS_SUCCESS,
			payload: data?.product,
		});
	} catch (error) {
		dispatch({
			type: PRODUCT_DETAILS_FAIL,
			payload: error?.response?.data?.message,
		});
	}
};

// Clearing Errors
export const clearErrors = () => async (dispatch) => {
	dispatch({ type: CLEAR_ERRORS });
};
