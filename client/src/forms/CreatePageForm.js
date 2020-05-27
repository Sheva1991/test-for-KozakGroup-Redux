import React from 'react'
import { reduxForm } from 'redux-form'
import { maxLengthCreator, required } from '../forms/FormControls/validator';
import { Input, createField } from './FormControls/FormControls';

const maxLength50 = maxLengthCreator(50)

const CreatePageForm = (props) => {
    return (
        <div className='card blue darken-1'>
            <div className='card-content white-text'>
                <span className="card-title">Добавить работника в базу</span>
                <form onSubmit={props.handleSubmit}>
                    <div className='input-field'>{createField('ФИО', 'fullname', [required, maxLength50], Input)}</div>
                    <div className='input-field'>{createField('Пол', 'gender', [required, maxLength50], Input)}</div>
                    <div className='input-field'>{createField('Контакты', 'contacts', [required, maxLength50], Input)}</div>
                    <div className='input-field'>{createField('Зарплата', 'salary', [required, maxLength50], Input)}</div>
                    <div className='input-field'>{createField('Должность', 'position', [required, maxLength50], Input)}</div>

                    {props.error && <div>
                        {props.error}
                    </div>}
                    <div>
                        <button className={props.btnValue === 'Добавить работника в базу' ? 'btn yellow darken-4' : 'btn green accent-4'}>{props.btnValue}</button>
                    </div>
                </form>
            </div>
        </div>)
}

export const CreatePageReduxForm = reduxForm({
    // a unique name for the form
    form: 'createPage'
})(CreatePageForm)



