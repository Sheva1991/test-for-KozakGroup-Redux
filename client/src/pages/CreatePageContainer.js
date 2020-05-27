import React from 'react'
import { CreatePage } from "./CreatePage"
import { createEmployee } from '../redux/employee-reducer'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

const CreatePageContainer = (props) => {

    if (!props.isAuth) {
        return <Redirect to={'/'} />
    }
    return (
        <CreatePage fullname={props.fullname} gender={props.gender}
            contacts={props.contacts} dateOfCreate={props.dateOfCreate} salary={props.salary} position={props.position}
            createEmployee={props.createEmployee} />
    )
}

const mapStateToProps = (state) => ({
    fullname: state.EmployeePage.EmployeeData.fullname,
    gender: state.EmployeePage.EmployeeData.gender,
    contacts: state.EmployeePage.EmployeeData.contacts,
    dateOfCreate: state.EmployeePage.EmployeeData.dateOfCreate,
    salary: state.EmployeePage.EmployeeData.salary,
    position: state.EmployeePage.EmployeeData.position,
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, { createEmployee })(CreatePageContainer);
