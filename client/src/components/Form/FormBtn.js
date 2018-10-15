import React from "react";

export const FormBtn = props => {

    if (props.dontshow === false) {
        return null
    } else {
        return (
            <button {...props} style={{ float: "right", marginBottom: 10 }} className="btn btn-success">
                {props.children}
            </button>
        )
    }
};