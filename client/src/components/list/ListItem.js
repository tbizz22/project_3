import React from "react";
import { Link } from "react-router-dom";

export const ListItem = props => (
    <li className="collection-item">
        <Link to={'/features/' + props.id}>

            <span className="title flow-text">{props.title}</span>
            <p>
                {props.team}
                <br />
                {props.status}
            </p>
            {/* <a href="#!" className="secondary-content">
        <i className="material-icons">grade</i>
      </a> */}
        </Link>
    </li>
);
