const INITIAL_STATE = {
    products: [],
    loading: false,
    error: null,
};

export const productsReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case "REQUEST_PRODUCTS_LIST":
            return { ...state, products: [], loading: true };
        case "PRODUCTS_LIST_SUCCESS":
            return { ...state, products: action.payload, loading: false };
        case "PRODUCTS_LIST_FAILURE":
            return { ...state, products: [], error: action.payload, loading: false };
        default:
            return state;
    }
};
