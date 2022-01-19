const cartItemsLocalStorage = localStorage.getItem("cartItems");

const INITIAL_STATE = {
    items: cartItemsLocalStorage ? JSON.parse(cartItemsLocalStorage) : [],
};

export const cartReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case "ADD_ITEM":
            const existingItem = state.items.find(
                (item) => item.product === action.payload.product
            );

            if (existingItem) {
                return {
                    ...state,
                    items: state.items.map((item) => {
                        if (item.product === existingItem.product) {
                            return action.payload;
                        }

                        return item;
                    }),
                };
            } else {
                return { ...state, items: [...state.items, action.payload] };
            }
        case "REMOVE_ITEM":
            return {
                ...state,
                items: state.items.filter(
                    (item) => item.product !== action.payload
                ),
            };
        default:
            return state;
    }
};
