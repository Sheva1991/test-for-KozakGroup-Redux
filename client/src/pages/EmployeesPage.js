import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { Loader } from '../components/Loader'
import { EmployeeListContainer } from '../components/EmployeeListContainer'
import { SearchReduxForm } from '../forms/SearchForm'

export const EmployeesPage = ({ employees, getEmployees, getTotalItemsCount, currentPage,
    pageSize, totalItemsCount, portionSize, setCurrentPage, updateEmployee, deleteEmployee, searchEmployees }) => {

    let pagesCount = Math.ceil(totalItemsCount / pageSize)
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    let portionCount = Math.ceil(pagesCount / portionSize)
    let [portionNumber, setPortionNumber] = useState(1)
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1
    let rigthPortionPageNumber = portionNumber * portionSize

    const handleSubmit = (formData) => {
        console.log(formData)
        searchEmployees(formData.search)
    }

    useEffect(() => {
        getEmployees(currentPage, pageSize)
        getTotalItemsCount(currentPage)
    }, [getEmployees, getTotalItemsCount, currentPage, pageSize])


    if (!employees) {
        return <Loader />
    }

    return (
        <>
            <SearchReduxForm onSubmit={handleSubmit} />
            {employees && <EmployeeListContainer currentPage={currentPage} employees={employees} updateEmployee={updateEmployee} deleteEmployee={deleteEmployee} />}
            <ul className="pagination">
                {portionNumber > 1 &&
                    <li><button onClick={() => { setPortionNumber(portionNumber - 1) }}>Prev</button></li>}
                {pages.filter(p => p >= leftPortionPageNumber && p <= rigthPortionPageNumber)
                    .map((p) => {
                        return <li key={p} className={currentPage === p ? 'active' : 'waves-effect'}><a href="#!"
                            onClick={(e) => { setCurrentPage(p) }} key={p}>{p}</a></li>
                    })}
                {portionCount > portionNumber &&
                    <li><button onClick={() => { setPortionNumber(portionNumber + 1) }}>Next</button></li>}
            </ul>
        </>
    )
}