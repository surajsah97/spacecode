const userLogin = { loading: false, userInfo: {}, error: null };
const Signin = (state = userLogin, action) => {
    switch (action.type) {
        case "USER_LOGIN_REQUEST":
            return { loading: true };
        case "USER_LOGIN_SUCCESS":
            return { loading: false, userInfo: action.payload.data };
        case "USER_LOGIN_FAIL":
            return { loading: false, error: action.payload };
        default:
            return state;
    }
};

export default Signin;