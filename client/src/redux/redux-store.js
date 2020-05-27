import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunkMiddleware from "redux-thunk";
import { reducer as formReducer } from 'redux-form'
import AppReducer from "./app-reducer";
import UserReducer from "./user-reducer";
import EmployeeReducer from "./employee-reducer";
import authReducer from "./auth-reducer";


let reducers = combineReducers({
    UserPage: UserReducer,
    EmployeePage: EmployeeReducer,
    form: formReducer,
    app: AppReducer,
    auth: authReducer

});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)));

export default store;