import { SET_SEARCH_INPUT } from "../constant/productConstant";

export const getSearchInput = (data) => async (dispatch) => {
	dispatch({
		type: SET_SEARCH_INPUT,
		payload: data,
	});
};
