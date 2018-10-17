import React from "react";
import { Link } from "react-router-dom";
import './List.css';

export const ListItem = props => {


const fullURL = props.image.split('/');
const image = fullURL[7]
const url = `https://res.cloudinary.com/loopfeed/image/upload/c_limit,h_100,w_150/v1539743879/${image}`;


    return (

        <li className="collection-item">
            <Link to={'/features/' + props.id}>

                <div className='row black-text'>
                    <div className='col s2'>
                        <img src={url} alt='thumbnail' />
                    </div>
                    <div className='col s7'>
                        <div className="title flow-text">{props.title}</div>
                        <div>{props.description}</div>
                    </div>

                    <div className='col s3'>
                        <div className='right'>{props.expectedDate}</div> <br />
                        <div className='right'>{props.primaryPersona}</div>
                    </div>
                    <div className='row'></div>


                    <div className='col s10 offset-s2'>
                        <span className='m3'>Team: {props.team}</span>
                        <span className='m3'>|</span>
                        <span className='m3'>Status: {props.status}</span>
                    </div>
                </div>
            </Link>
        </li>
    );
}