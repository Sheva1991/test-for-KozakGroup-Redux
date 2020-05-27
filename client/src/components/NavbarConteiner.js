import React from 'react'
import { Navbar } from './Navbar'
import { connect } from 'react-redux';
import { logout } from '../redux/auth-reducer'

class NavbarContainer extends React.Component {
    render() {
        return (
            <Navbar {...this.props} />
        )
    }
}

const mapStatetoProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
})

export default connect(mapStatetoProps, { logout })(NavbarContainer);