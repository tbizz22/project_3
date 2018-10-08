import React from "react";

export const Select = props => (
    <div>
        <label>Browser Select</label>
        <select {...props} className="browser-default"> 
            <option value="" disabled selected>Choose your option</option>
            <option value="1">Option 1</option>
            <option value="2">Option 2</option>
            <option value="3">Option 3</option>
        </select>
    </div>
);