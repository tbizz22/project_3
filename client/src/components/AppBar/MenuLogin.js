import React from 'react'

const MenuLogin = (props) => {
    if (props.login === 1) {
        return (
            <a href="/#" onClick={props.logout}>Logout</a>
        )
    } else {
        return (
            <a href="/Login">Login</a>
        )
    }
}

export default MenuLogin;