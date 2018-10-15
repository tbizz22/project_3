import React from 'react'
import './AppBar.css'

const MenuLogin = (props) => {
    // const cd = props.user;
    console.log(props.user)

    if (props.login === 1) {
        return (
            <div>
            <a href={`/user/${props.user._id}`} className='right' ><img alt='user avatar' className='pt-10 pr-10'  src={`https://api.adorable.io/avatars/40/${props.user._id}.png`}></img></a>
            
            <a className='right' href="/#" onClick={props.logout}>Logout</a>
            </div>
        )
    } else {
        return (
            <a href="/Login">Login</a>
        )
    }
}

export default MenuLogin;