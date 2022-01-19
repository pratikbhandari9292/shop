export const addItem = (itemID, qty) => {
    return async (dispatch, getState) => {
        try {
            const response = await fetch(`/api/products/${itemID}`);
            const data = await response.json();
            dispatch({
                type: "ADD_ITEM",
                payload: {
                    product: data._id,
                    name: data.name,
                    image: data.image,
                    price: data.price,
                    stock_count: data.stock_count,
                    qty,
                },
            });
            localStorage.setItem(
                "cartItems",
                JSON.stringify(getState().cart.items)
            );
        } catch (error) {}
    };
};

export const removeItem = (itemID) => {
    return (dispatch, getState) => {
        dispatch({ type: "REMOVE_ITEM", payload: Number(itemID) });
        localStorage.setItem(
            "cartItems",
            JSON.stringify(getState().cart.items)
        );
    };
};
