import React from 'react';
import './NoMatch.css'



const NoMatch = (props) => {

    return (
        <div className="page-container">
            <div className="bg" style={{ backgroundImage: 'url(' + 'broken' + ')' }}></div>
            <h1 className="title">404</h1>
        </div>
    )

}

export default NoMatch;