import React from 'react'
import { reduxForm, Fields } from 'redux-form'

const ChangePageForm = (props) => {
    const renderFields = (fields) => (
        <div>
            <div className="input-row">
                <input {...fields.fullname.input} type="text" placeholder={props.employee.fullname} required />
                {fields.fullname.meta.touched && fields.fullname.meta.error &&
                    <span className="error">{fields.fullname.meta.error}</span>}
            </div>
            <div className="input-row">
                <input {...fields.gender.input} type="text" placeholder={props.employee.gender} required />
                {fields.gender.meta.touched && fields.gender.meta.error &&
                    <span className="error">{fields.gender.meta.error}</span>}
            </div>
            <div className="input-row">
                <input {...fields.contacts.input} type="text" placeholder={props.employee.contacts} required />
                {fields.contacts.meta.touched && fields.contacts.meta.error &&
                    <span className="error">{fields.contacts.meta.error}</span>}
            </div>
            <div className="input-row">
                <input {...fields.salary.input} type="text" placeholder={props.employee.salary} required />
                {fields.salary.meta.touched && fields.salary.meta.error &&
                    <span className="error">{fields.salary.meta.error}</span>}
            </div>
            <div className="input-row">
                <input {...fields.position.input} type="text" placeholder={props.employee.position} required />
                {fields.position.meta.touched && fields.position.meta.error &&
                    <span className="error">{fields.position.meta.error}</span>}
            </div>
        </div>
    )
    return <form onSubmit={props.handleSubmit}>
        < Fields
            names={
                [
                    'fullname',
                    'gender',
                    'contacts',
                    'salary',
                    'position'
                ]}
            component={renderFields}
        />

        {props.error && <div>
            {props.error}
        </div>}
        <div>
            <button className={props.btnValue === 'Добавить работника в базу' ? 'btn yellow darken-4' : 'btn green accent-4'}>{props.btnValue}</button>
        </div>
    </form>
}

export const ChangePageReduxForm = reduxForm({
    // a unique name for the form
    form: 'changePageForm'
})(ChangePageForm)

