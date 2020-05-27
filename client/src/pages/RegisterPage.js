import React from 'react'
import { reduxForm } from 'redux-form'
import { maxLengthCreator, required } from '../forms/FormControls/validator';
import { Input, createField } from '../forms/FormControls/FormControls';
import { connect } from 'react-redux';
import { register } from '../redux/user-reducer';
import { useHistory } from 'react-router-dom';


const RegisterPage = ({ register }) => {
    const history = useHistory()

    const onSubmit = (formData) => {
        register(formData.email, formData.login, formData.password)
        if (formData) {
            history.push(`/create`)
        }
    }
    return <div>
        <RegisterReduxForm onSubmit={onSubmit} />
    </div>
}

const maxLength50 = maxLengthCreator(50)

const RegisterForm = (props) => {

    return (
        <div className='row'>
            <div className='col s6 offset-s3'>
                <div className='card blue darken-1'>
                    <div className='card-content white-text'>
                        <span className="card-title">Регистрация</span>
                        <form onSubmit={props.onSubmit}>
                            {createField('Email', 'email', [required, maxLength50], Input, { type: 'email' })}
                            {createField('Login', 'login', [required, maxLength50], Input, { type: 'text' })}
                            {createField('Password', 'password', [required, maxLength50], Input, { type: 'password' })}
                            <div>
                                <button
                                    className="btn lighten-1 black-text"
                                >
                                    Регистрация
                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

const RegisterReduxForm = reduxForm({
    // a unique name for the form
    form: 'reg'
})(RegisterForm)

const mapStateToProps = (state) => ({

})

export default connect(mapStateToProps, { register })(RegisterPage)