const userInfoFromLocalStorage = localStorage.getItem("userInfo");

const INITIAL_STATE = {
    userInfo: userInfoFromLocalStorage
        ? JSON.parse(userInfoFromLocalStorage)
        : null,
    loading: false,
    error: null,
};

export const currentUserReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case "USER_LOGIN_REQUEST":
            return { loading: true };
        case "USER_LOGIN_SUCCESS":
            return { userInfo: action.payload, loading: false };
        case "USER_LOGIN_FAILURE":
            return { userInfo: null, loading: false, error: action.payload };
        case "USER_LOGOUT":
            return INITIAL_STATE;
        default:
            return state;
    }
};
