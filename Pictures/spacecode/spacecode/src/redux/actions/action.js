import axios from "axios"

const config = {
    headers: {
        'Content-Type': 'application/json',
        type: 'Web'
    }
};
const Sendlogin = (post) => async (dispatch) => {
    dispatch({ type: "USER_LOGIN_REQUEST" });
    
    try{const loginRes = await axios.post("login",post,config)
    if(loginRes){
        dispatch({
            type: "USER_LOGIN_SUCCESS",
            payload: loginRes
        });
        localStorage.setItem('userInfo', JSON.stringify(loginRes));
        localStorage.setItem('isLoggedIn', true);
    }

}
catch (error) {
    dispatch({
        type: "USER_LOGIN_FAIL",
        payload: error?.response?.statusText
    });
}
};

export default Sendlogin;