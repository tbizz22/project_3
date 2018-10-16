import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import { Helmet } from 'react-helmet';
import './Preload.css';

const styles = theme => ({
    progress: {
        margin: theme.spacing.unit * 2,
    },
});

function Preload(props) {
    const { classes } = props;
    return (
        <div className='height'>
            <Helmet>
                <style>{'body { background-color: #778899 ; }'}</style>
            </Helmet>


            <div className='container height loader'>
                <div className='loader'>
                    <div><CircularProgress className={classes.progress} size={50} /></div>
                </div>
            </div>

        </div>



    );
}

Preload.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Preload);