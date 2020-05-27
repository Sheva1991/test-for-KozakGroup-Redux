
let initialState = {
    initialized: false
};

const INITIALIZED_SUCSESS = 'INITIALIZED_SUCSESS'

const AppReducer = (state = initialState, action) => {
    switch (action.type) {
        case INITIALIZED_SUCSESS:
            return {
                ...state,
                initialized: action.initialized
            }
        default:
            return state;

    }
}

export const actions = {
    setInitializedSucsess: (initialized) => { return { type: INITIALIZED_SUCSESS, initialized } }
}


export const initializeApp = (dispatch) => {
    console.log(localStorage.getItem('token'))
    if (localStorage.getItem('token').length) {
        dispatch(actions.setInitializedSucsess(true))
    }
}

export default AppReducer;