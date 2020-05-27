import React, { useState } from 'react'
// import { CreatePageReduxForm } from '../forms/CreatePageForm'    
import { ChangePageReduxForm } from '../forms/ChangePageForm'

export const EmployeeList = ({ employees, updateEmployee, deleteEmployee, currentPage }) => {
    const [editeMode, setEditeMode] = useState('')
    if (!employees.length) {
        return <p className='center'>Работников пока нет</p>
    }
    return (
        <table>
            <thead>
                <tr>
                    <th>№</th>
                    <th>ФИО</th>
                    <th>Пол</th>
                    <th>Контактная информация</th>
                    <th>Дата добавления</th>
                    <th>Оклад</th>
                    <th>Должность</th>
                </tr>
            </thead>

            <tbody>
                {employees.map((employee, index) => {
                    const handleSubmit = (formData) => {
                        const date = new Date().toLocaleDateString()
                        updateEmployee(employee._id, formData.fullname, formData.gender, formData.contacts, date, formData.salary, formData.position)
                        setEditeMode(false)
                    }
                    const deleteItem = (id) => {
                        deleteEmployee(id)
                    }
                    return (
                        <tr key={employee._id} id={employee._id}>
                            <td>{(currentPage - 1) * 5 + index + 1}</td>
                            {editeMode === employee._id ? <td><ChangePageReduxForm onSubmit={handleSubmit} btnValue='Сохранить' employee={employee} /></td> :
                                <>
                                    <td style={{ maxWidth: '200px', overflow: 'hidden' }}>{employee.fullname}</td>
                                    <td style={{ maxWidth: '200px', overflow: 'hidden' }}>{employee.gender}</td>
                                    <td style={{ maxWidth: '200px', overflow: 'hidden' }}>{employee.contacts}</td>
                                    <td style={{ maxWidth: '200px', overflow: 'hidden' }}>{employee.dateOfCreate}</td>
                                    <td style={{ maxWidth: '200px', overflow: 'hidden' }}>{employee.salary}</td>
                                    <td style={{ maxWidth: '200px', overflow: 'hidden' }}>{employee.position}</td>
                                </>
                            }
                            <td> {!editeMode && <button className='btn light-blue darken-2' onClick={(e) => {
                                let thisForm = e.target.parentElement.parentElement.getAttribute('id')
                                setEditeMode(thisForm)
                            }}>Изменить</button>}
                            </td>
                            <td><button className='btn red accent-4' onClick={() => { deleteItem(employee._id) }}>Delete</button></td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}