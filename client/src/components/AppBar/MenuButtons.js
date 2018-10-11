import React from 'react'

const MenuButtons = (props) => {
    if (props.login === 1) {
        return (
            <div>
                <li><a href="/features">Features</a></li>
            </div>
        )
    } else {
        return (
            <li><a href="/register">Register</a></li>
        )
    }
}

export default MenuButtons;