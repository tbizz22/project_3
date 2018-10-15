import React from "react";
const  moment = require('moment');


export const Input = props => {

   

    if (props.time === 1) {
        return (
            <div className="form-group">
                <input className="form-control" disabled={props.disabled} value={moment(props.value).format('MM-DD-YYYY | hh:mm')}
                />
            </div>
        )

    } else {
        return (
            <div className="form-group">
                <input className="form-control" disabled={props.disabled} {...props} />
            </div>
        )
    }
}
