export const login = (email, password) => {
    return async (dispatch) => {
        try {
            dispatch({ type: "USER_LOGIN_REQUEST" });
            const response = await fetch("/api/users/login/", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    username: email,
                    password,
                }),
            });
            const data = await response.json();
            dispatch({ type: "USER_LOGIN_SUCCESS", payload: data });
            localStorage.setItem("userInfo", JSON.stringify(data));
        } catch (error) {
            dispatch({
                type: "USER_LOGIN_FAILURE",
                payload: "something went wrong",
            });
        }
    };
};

export const logout = () => {
    return (dispatch) => {
        localStorage.removeItem("userInfo");
        dispatch({
            type: "USER_LOGOUT",
        });
    };
};
