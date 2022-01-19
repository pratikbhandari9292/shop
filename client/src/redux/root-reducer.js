import { combineReducers } from "redux";

import { productsReducer } from "./products/products.reducer";
import { productDetailsReducer } from "./product-details/product-details.reducer";
import { cartReducer } from "./cart/cart.reducer";
import { currentUserReducer } from "./current-user/current-user.reducer";

export default combineReducers({
    products: productsReducer,
    productDetails: productDetailsReducer,
    cart: cartReducer,
    currentUser: currentUserReducer,
});
