import React from 'react'
import { reduxForm } from 'redux-form'
import { maxLengthCreator, required } from '../forms/FormControls/validator';
import { Input, createField } from '../forms/FormControls/FormControls';
import { connect } from 'react-redux';
import { login } from '../redux/auth-reducer';
import { Redirect, useHistory } from 'react-router-dom';



const LoginPage = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.login, formData.password)
    }
    if (props.isAuth) {
        return <Redirect to={'/create'} />
    }
    return <div>
        <LoginReduxForm onSubmit={onSubmit} />
    </div>
}

const maxLength50 = maxLengthCreator(50)

const LoginForm = (props) => {
    const history = useHistory()
    const registerHandler = () => {
        history.push(`/register`)
    }
    return (<div className='row'>
        <div className='col s6 offset-s3'>
            <div className='card blue darken-1'>
                <div className='card-content white-text'>
                    <span className="card-title">Авторизация</span>
                    <form onSubmit={props.handleSubmit}>
                        <div className='input-field'>{createField('Login', 'login', [required, maxLength50], Input)}</div>
                        <div className='input-field'>{createField('Password', 'password', [required, maxLength50], Input, { type: 'password' })}</div>
                        <div>
                            <button
                                className="btn yellow darken-4"
                                style={{ marginRight: '10px' }}
                            >
                                Войти
                            </button>
                            <button
                                className="btn lighten-1 black-text"
                                onClick={registerHandler}
                            >
                                Регистрация
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>)
}

const LoginReduxForm = reduxForm({
    // a unique name for the form
    form: 'login'
})(LoginForm)

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    initialized: state.app.initialized
})

export default connect(mapStateToProps, { login })(LoginPage)


