import React from 'react'
import { NavLink, useHistory } from 'react-router-dom'

export const Navbar = (props) => {
    const history = useHistory()
    const logoutHandler = () => {
        props.logout()
        history.push('/')
    }
    return (
        <nav>
            <div className="nav-wrapper blue darken-1" style={{ padding: '0 2rem' }}>
                <span className="brand-logo">Сотрудники фирмы</span>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><NavLink to='/create' >Создать</NavLink></li>
                    <li><NavLink to='/employees'>Сотрудники</NavLink></li>
                    <li>
                        {props.isAuth ? <div><a href='/' onClick={logoutHandler}>Выйти</a></div> :
                            <NavLink to={'/'}>Войти</NavLink>}
                    </li>
                </ul>
            </div>
        </nav>
    )
}