export const getProductDetails = (productID) => {
    return async (dispatch) => {
        dispatch({ type: "REQUEST_PRODUCT_DETAILS" });
        try {
            const response = await fetch(`/api/products/${productID}`);
            const data = await response.json();
            dispatch({ type: "PRODUCT_DETAILS_SUCCESS", payload: data });
        } catch (error) {
            dispatch({
                type: "PRODUCT_DETAILS_FAILURE",
                payload: "something went wrong",
            });
        }
    };
};
