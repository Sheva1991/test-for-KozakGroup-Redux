import { authAPI } from '../api/auth-api';
import { stopSubmit } from "redux-form";
import { setAuthorizationToken } from '../utils/setAutorization';


let initialState = {
    token: null,
    userId: null,
    isAuth: false
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SN/AUTH/SET_USER_DATA':
            return {
                ...state,
                ...action.payload,
            }
        default:
            return state;

    }
}

export const actions = {
    setAuthUserData: (token, userId, isAuth) => { return { type: 'SN/AUTH/SET_USER_DATA', payload: { token, userId, isAuth } } }
}


export const login = (login, password) => async (dispatch) => {
    try {
        let data = await authAPI.login(login, password)
        let { token, userId } = data;
        localStorage.setItem('token', token)
        setAuthorizationToken(token)
        if (data) {
            dispatch(actions.setAuthUserData(token, userId, true))
        } else {
            let message = data.messages.length > 0 ? data.messages[0] : 'Some error'
            dispatch(stopSubmit('login', { _error: message }))
        }
    } catch (e) { }
}


export const logout = () => async (dispatch) => {
    dispatch(actions.setAuthUserData(null, null, null, false));
    localStorage.removeItem('storageName')

}

export default authReducer;
