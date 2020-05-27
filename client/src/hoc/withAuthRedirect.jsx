import React from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

let mapStateToPropsForRedirect = (state) => ({
    isAuth: state.auth.isAuth
})


export function withAuthRedirect(Component) {

    const RedirectComponent = (props) => {

        let { isAuth, ...restProps } = props


        if (!isAuth) return <Redirect to={"/"} />


        return <Component {...restProps} />
    }

    let ConnectedAuthRedirectComponent = connect(
        mapStateToPropsForRedirect)(RedirectComponent)

    return ConnectedAuthRedirectComponent
}