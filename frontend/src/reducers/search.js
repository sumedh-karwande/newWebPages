
import {SET_SEARCH_INPUT
} from "../constant/productConstant";






const initialState ={
    searchInput:''
}

 
  export const SearchReducer = (state = initialState, action) => {
   
   switch(action.type){
    case SET_SEARCH_INPUT:
    return {
        ...state ,
        searchInput:action.payload
    }
       
    default:
      return state;
   }
  }