import React, { Component } from "react";
import './home.css';
import { Helmet } from 'react-helmet';




class home extends Component {
    state = {
        foo: 'bar'
    };

    render() {
        return (
            <div>
                <Helmet>
                    <style>{'body { background-color: #778899 ; }'}</style>
                </Helmet>
                <div className='container'>
                    <div className="row">

                        <div className="center-align mt40 card p20 z-depth-5">
                            <span>
                                <i className="fas fa-retweet fa-8x black-text darken-2"></i>
                            </span>
                            <h2>LoopFeed</h2>
                            <div className="section"></div>
                            <div className="flow-text">Quickly provide feedback for features</div>
                        </div>
                    </div>
                </div>


            </div>
        )
    };
}


export default home;