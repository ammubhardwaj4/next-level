import axios from 'axios';
import {isEmpty} from 'lodash';
const initialState = {
    isLogin: false,
    userDetail: {}
}

const getUserDetail = async ({role}) => {
    try{
        let url = role === "admin" ? `/5de279a53000005200e9c8ea` : `/5de279d23000006600e9c8eb`
        const response =  await axios.get(`http://www.mocky.io/v2${url}`);
        return response;
    } catch(err) {
        console.log(err.message);
        return {};
    }
    
}

const reducer = async (state = initialState, action) => {
    console.log("reducer function", {...state}, action);

    switch(action.type) {
        case "login":
            const response = await getUserDetail(action.payload.userDetail);
            console.log("hi jarvis", response);
            if (response.data.email === action.payload.userDetail.email && response.data.password === action.payload.userDetail.password) {
               console.log('insideif');
            //    action.payload.callback();
                return {isLogin: true, userDetail: response.data }
            } else {
                console.log('insideelse');
                return {...state}
            }
            default:
                return state
    }
}

export default reducer;