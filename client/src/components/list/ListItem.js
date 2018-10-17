import React from "react";
import { Link } from "react-router-dom";
import './List.css';

export const ListItem = props => (
    <li className="collection-item">
        <Link to={'/features/' + props.id}>

            <div className='row black-text'>
                <div className='col s9'>
                    <div className="title flow-text">{props.title}</div>
                    <div>{props.description}</div>
                </div>

                <div className='col s3'>
                    <div className='right'>{props.expectedDate}</div> <br />
                    <div className='right'>{props.primaryPersona}</div>
                </div>
                <div className='row'></div>

                <div className='col s10 offset-2'>
                    <span className = 'm3'>Team: {props.team}</span>
                    <span className = 'm3'>|</span>
                    <span className = 'm3'>Status: {props.status}</span>
                </div>
            </div>
        </Link>
    </li>
);
