import { authAPI } from "../api/auth-api";
import { stopSubmit } from "redux-form";


let initialState = {
    userData: [
        {
            id: 0,
            email: '',
            password: '',
            login: ''
        }
    ]
};

const UserReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_USER':
            return {
                ...state,
                userData: [...state.userData, { id: state.userData.length + 1 }]
            }
        default:
            return state;

    }
}

export let actions = {
    addUser: (email, password, login) => { return { type: 'ADD_USER', email, password, login } }
}


export const register = (email, password, login) => async (dispatch) => {
    try {
        let data = await authAPI.register(email, password, login)
        if (data) {
            dispatch(actions.addUser(email, password, login))
        } else {
            let message = data.messages.length > 0 ? data.messages[0] : 'Some error'
            dispatch(stopSubmit('register', { _error: message }))
        }
    } catch (e) { }
}


export default UserReducer;
