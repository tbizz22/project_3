import React from "react";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const NavBar = () => {
    return (
        <div>
            <AppBar position = 'static'>
                <Toolbar>
                    <Typography variant='Title' color='inherit'>
                    LoopFeed
                    </Typography>
                    <Button href='/'>Click It</Button>
                    <Button href='/login'>Ticket</Button>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default NavBar;