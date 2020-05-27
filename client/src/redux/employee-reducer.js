import { employeeAPI } from "../api/employee-api";

let initialState = {
    EmployeeData: [
        {
            fullname: '',
            gender: '',
            contacts: '',
            dateOfCreate: '',
            salary: '',
            position: '',
        }
    ],
    currentPage: 1,
    pageSize: 5,
    portionSize: 3,
    totalItemsCount: 10

};

const EmployeeReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_EMPLOYEE':
            return {
                ...state,
                EmployeeData: [...state.EmployeeData, {
                    fullname: action.fullname,
                    gender: action.gender,
                    contacts: action.contacts,
                    salary: action.salary,
                    dateOfCreate: action.dateOfCreate,
                    position: action.position
                }]
            }
        case 'SET_CURRENT_PAGE':
            return {
                ...state,
                currentPage: action.currentPage

            }
        case 'GET_EMPLOYEE':
            return {
                ...state,
                EmployeeData: [...action.employees]

            }
        case 'SET_TOTAL_ITEM_COUNT':
            return {
                ...state,
                totalItemsCount: action.quantity

            }
        case 'UPDATE_EMPLOYEE_ITEM':
            return {
                ...state,
                EmployeeData: [...[...state.EmployeeData].map(function (item, i, arr) {
                    if (item._id === action.id) {
                        item.fullname = action.fullname
                        item.gender = action.gender
                        item.contacts = action.contacts
                        item.salary = action.salary
                        item.dateOfCreate = action.dateOfCreate
                        item.position = action.position

                    }
                    return item
                })]
            }
        case 'DELETE_EMPLOYEE_ITEM':
            return {
                ...state,
                EmployeeData: state.EmployeeData.filter((employee) => {
                    return employee._id !== action.id
                })
            }
        default:
            return state
    }
}

export let actions = {
    addEmployee: (fullname, gender, contacts, salary, dateOfCreate, position) => { return { type: 'ADD_EMPLOYEE', fullname, gender, contacts, salary, dateOfCreate, position } },
    setCurrentPage: (currentPage) => { return { type: 'SET_CURRENT_PAGE', currentPage } },
    getEmployees: (employees) => { return { type: 'GET_EMPLOYEE', employees } },
    setTotalItemsCount: (quantity) => { return { type: 'SET_TOTAL_ITEM_COUNT', quantity } },
    updateEmployeeAtState: (id, fullname, gender, contacts, dateOfCreate, salary, position) => { return { type: 'UPDATE_EMPLOYEE_ITEM', id, fullname, gender, contacts, dateOfCreate, salary, position } },
    deleteEmployeeFromState: (id) => { return { type: 'DELETE_EMPLOYEE_ITEM', id } },
}


export const createEmployee = (fullname, gender, contacts, dateOfCreate, salary, position) => async (dispatch) => {
    try {
        let data = await employeeAPI.createEmployees(fullname, gender, contacts, dateOfCreate, salary, position);
        if (data) {
            dispatch(actions.addEmployee(fullname, gender, contacts, dateOfCreate, salary, position));
        }
    } catch (e) { }
}
export const updateEmployee = (id, fullname, gender, contacts, dateOfCreate, salary, position) => async (dispatch) => {
    try {
        let data = await employeeAPI.updateEmployee(id, fullname, gender, contacts, dateOfCreate, salary, position);
        if (data) {
            dispatch(actions.updateEmployeeAtState(id, fullname, gender, contacts, dateOfCreate, salary, position));
        }
    } catch (e) { }
}
export const deleteEmployee = (id) => async (dispatch) => {
    try {
        let data = await employeeAPI.deleteEmployee(id);
        if (data) {
            dispatch(actions.deleteEmployeeFromState(id));
        }
    } catch (e) { }
}
export const getEmployees = (currentPage, pageSize) => async (dispatch) => {
    try {
        let data = await employeeAPI.getEmployeesPages(currentPage, pageSize);
        const employees = data.results
        if (employees) {
            dispatch(actions.getEmployees(employees));
        }
    } catch (e) { }
}
export const getTotalItemsCount = (currentPage) => async (dispatch) => {
    try {
        let data = await employeeAPI.getEmployeesTotalCount(currentPage);
        const quantity = data.length
        if (quantity) {
            dispatch(actions.setTotalItemsCount(quantity));
        }
    } catch (e) { }
}


export default EmployeeReducer;