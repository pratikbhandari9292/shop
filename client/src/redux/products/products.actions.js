export const getProducts = () => {
    return async (dispatch) => {
        try {
            dispatch({ type: "REQUEST_PRODUCTS_LIST" });
            const response = await fetch("/api/products");
            const data = await response.json();
            dispatch({ type: "PRODUCTS_LIST_SUCCESS", payload: data });
        } catch (error) {
            dispatch({
                type: "PRODUCTS_LIST_FAILURE",
                payload: "something went wrong",
            });
        }
    };
};
