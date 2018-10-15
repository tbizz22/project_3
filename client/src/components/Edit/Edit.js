import React from 'react';

const Edit = props => {
if (props.showedit === true) {
    if (props.role === 'admin') {
        return (
            <button {...props} className = 'btn-flat'>
            <span>
                <i className="material-icons">edit</i>
            </span>
            </button>
            )
    } else {
        return (
            null
        )
    }
}  else {
    return (
        null
    )
}
}

export default Edit;