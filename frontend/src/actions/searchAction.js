

import {SET_SEARCH_INPUT
} from "../constant/productConstant";

export const getSearchInput = (data)=> async (dispatch) =>{ 
  console.log("dddddddddddddata" ,data);
  
        dispatch({
            type :SET_SEARCH_INPUT ,
            payload :data 
        })
   
       
    }
