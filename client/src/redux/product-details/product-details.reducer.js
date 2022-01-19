const INITIAL_STATE = {
    details: {},
    loading: false,
    error: null,
};

export const productDetailsReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case "REQUEST_PRODUCT_DETAILS":
            return { details: {}, loading: true };
        case "PRODUCT_DETAILS_SUCCESS":
            return { details: action.payload, loading: false, error: null };
        case "PRODUCT_DETAILS_FAILURE":
            return { loading: false, error: action.payload };
        default:
            return state;
    }
};
