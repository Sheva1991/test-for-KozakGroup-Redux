import React from 'react'
import { EmployeesPage } from './EmployeesPage'
import { getEmployees, getTotalItemsCount, actions, searchEmployees } from '../redux/employee-reducer'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { updateEmployee, deleteEmployee } from '../redux/employee-reducer'

const EmployeesPageContaier = (props) => {
    if (!props.isAuth) {
        return <Redirect to={'/'} />
    }
    return (
        <EmployeesPage employees={props.employees} currentPage={props.currentPage}
            pageSize={props.pageSize} totalItemsCount={props.totalItemsCount} portionSize={props.portionSize}
            getEmployees={props.getEmployees} getTotalItemsCount={props.getTotalItemsCount} setCurrentPage={props.setCurrentPage}
            updateEmployee={props.updateEmployee} deleteEmployee={props.deleteEmployee} searchEmployees={props.searchEmployees} />
    )
}

const mapStateToProps = (state) => ({
    employees: state.EmployeePage.EmployeeData,
    pageSize: state.EmployeePage.pageSize,
    currentPage: state.EmployeePage.currentPage,
    totalItemsCount: state.EmployeePage.totalItemsCount,
    portionSize: state.EmployeePage.portionSize,
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, { getEmployees, getTotalItemsCount, setCurrentPage: actions.setCurrentPage, updateEmployee, deleteEmployee, searchEmployees })(EmployeesPageContaier);