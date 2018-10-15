import React from 'react'

const MenuButtons = (props) => {
    if (props.login === 1) {
        if (props.user.role === 'admin') {
            return (
                <div>
                    <li><a href="/features">Features</a></li>
                    <li><a href="/newfeature">Add a Feature</a></li>
                </div>               
            )
        } else {
            return (
                <div>
                    <li><a href="/features">Features</a></li>
                </div>
            )
        }

    } else {
        return (
            <li><a href="/register">Register</a></li>
        )
    }
}

export default MenuButtons;