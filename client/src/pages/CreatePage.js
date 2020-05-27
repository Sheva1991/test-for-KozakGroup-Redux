import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { CreatePageReduxForm } from '../forms/CreatePageForm'

export const CreatePage = ({ createEmployee }) => {
    const history = useHistory()

    useEffect(() => {
        window.M.updateTextFields()
    }, [])

    const handleSubmit = (formData) => {
        const date = new Date().toLocaleDateString()
        createEmployee(formData.fullname, formData.gender, formData.contacts, date, formData.salary, formData.position)
        history.push(`/employees`)
    }
    return (
        <div className='row'>
            <div className="col s8 offset-s2" style={{ paddingTop: '2rem' }}>
                <CreatePageReduxForm onSubmit={handleSubmit} btnValue='Добавить работника в базу' />
            </div>
        </div>
    )
}