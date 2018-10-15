import React from "react";

export const Input = props => (
  <div className="form-group">
    <input className="form-control" disabled = {props.disabled} {...props} />
  </div>
);
