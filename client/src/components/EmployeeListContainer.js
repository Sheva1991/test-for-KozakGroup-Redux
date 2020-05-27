import React from 'react'
import { EmployeeList } from './EmployeeList'
import { connect } from 'react-redux'


export const EmployeeListContainer = ({ employees, updateEmployee, deleteEmployee, currentPage }) => {

    return (
        <EmployeeList currentPage={currentPage} employees={employees} updateEmployee={updateEmployee} deleteEmployee={deleteEmployee} />
    )
}


const mapStateToProps = (state) => ({

})

export default connect(mapStateToProps, {})(EmployeeListContainer);