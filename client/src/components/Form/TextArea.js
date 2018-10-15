import React from "react";

export const TextArea = props => (
  <div className="form-group">
    <textarea className="form-control" disabled = {props.disabled} rows="20" {...props} />
  </div>
);
