import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
// import {
//     productsReducer
// } from "./reducers/productReducer";  
import { productsReducer,productDetailsReducer , } from "./reducers/productReducers";
import {SearchReducer} from "./reducers/search"

const reducer = combineReducers({
    products: productsReducer,
    productDetails:productDetailsReducer ,
    serachProduct :SearchReducer 
});

let initialState = {};
const middleware = [thunk];

const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
  );
  
  export default store;