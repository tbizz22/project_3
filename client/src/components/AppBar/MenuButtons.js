import React from 'react'

const MenuButtons = (props) => {
    if (props.login === 1) {
        return (
            <div>
                <li><a href="/">Features</a></li>
            </div>
        )
    } else {
        return (
            <li><a href="/register">Register</a></li>
        )
    }
}

export default MenuButtons;