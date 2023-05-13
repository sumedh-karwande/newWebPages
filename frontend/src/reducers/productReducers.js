
import {ALL_PRODUCT_REQUEST ,ALL_PRODUCT_FAIL  ,ALL_PRODUCT_SUCCESS ,PRODUCT_DETAILS_SUCCESS,PRODUCT_DETAILS_FAIL,PRODUCT_DETAILS_REQUEST,CLEAR_ERRORS
} from "../constant/productConstant";





export const productsReducer = (state = { products: [] }, action) => {
    switch (action.type) {
      case ALL_PRODUCT_REQUEST:
        return {
          loading: true,
          products: [],
        };
      case ALL_PRODUCT_SUCCESS:
        return {
          loading: false,
          products: action.payload.products,
          productsCount: action.payload.productsCount,
          resultPerPage: action.payload.resultPerPage,
          filteredProductsCount: action.payload.filteredProductsCount,
        };
  
      case ALL_PRODUCT_FAIL:
        return {
          loading: false,
          error: action.payload,
        };
  
        case CLEAR_ERRORS:
            return {
              ...state,
              error: null,
            };
      default:
        return state;
    }
  };

  // product details
  export const productDetailsReducer = (state = { products: [] }, action) => {
   switch(action.type){
    case PRODUCT_DETAILS_REQUEST:
    return {
      loading:true ,
      product :[]
    }
    case PRODUCT_DETAILS_SUCCESS:
      return {
        loading :false ,
        product:action.payload 
      }
      case PRODUCT_DETAILS_FAIL:
        return {
         loading :false ,
         product :action.payload
        }
        case CLEAR_ERRORS:
          return {
            ...state,
            error: null,
          };
    default:
      return state;
   }
  }