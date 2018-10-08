import React from "react";

export const Select = props => (
    <div>
        <label>Role</label>
        {/* TODO: replace styling on dropdown field to use materialize */}
        {/* TODO: Pass in options dynamically */}
        <select {...props} className="browser-default"> 
            <option value="" disabled selected>Choose your option</option>
            <option value="Help Desk">Help Desk</option>
            <option value="Account Manager">Account Manager</option>
            <option value="Sales">Sales</option>
            <option value="Technology">Technology</option>
            <option value="Other">Other</option>
        </select>
    </div>
);