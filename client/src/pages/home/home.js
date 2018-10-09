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
                    <div class="row">

                        <div class="center-align mt40 card p20 grey lighten-2">
                            <span class="">
                                <i class="fas fa-retweet fa-8x black-text darken-2"></i>
                            </span>
                            <h2>LoopFeed</h2>
                            <div class="section"></div>
                            <div class="flow-text">Quickly provide feedback for new and exciting features</div>
                        </div>
                    </div>
                </div>


            </div>
        )
    };
}


export default home;