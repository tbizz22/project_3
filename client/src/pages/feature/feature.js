import React, { Component } from 'react';
import API from '../../utils/API';
import './feature.css';


import { Helmet } from 'react-helmet';

class feature extends Component {
    state = {
        title: '',
        comments: [],
        status: '',
        team: '',
        image: '',
        created: ''
    };

    componentDidMount() {
        const featureId = this.props.match.params.id;
        console.log(featureId)

        this.getFeature(featureId);
    };

    getFeature = (id) => {
        API.getFeature(id)
            .then(res => {
                const r = res.data;
                this.setState({
                    title: r.title,
                    comments: [r.comments],
                    status: r.status,
                    team: r.team,
                    image: r.image,
                    created: r.createdAt,
                    description: r.description
                })
            })
            .catch(err => { console.log(err) });
    }







render() {
    return (
        <div>
            <Helmet>
                <style>{'body { background-color: #778899 ; }'}</style>
            </Helmet>

            <div className='row'>
                <h4 className='center-align'>{this.state.title}</h4>
            </div>

            <div className='container'>   
                <div className='center-align'>
                    <img className='responsive-img max-height center-align' src={`/images/${this.state.image}`} alt='Feature'/>
                </div>

                <div id='feature-content' className='card-panel'>
                    <div className='row'>
                        <h6>Description:</h6>
                        <div>
                            {this.state.description}
                        </div>
                    </div>     

                    <div className='row'>
                        <div className='col s6'>
                            <div>
                                <h6>Team:  </h6>
                                {this.state.team}
                            </div>
                        </div>

                        <div className='col s6'>
                            <div>
                                <h6>Status: </h6> 
                                {this.state.status}
                            </div>
                        </div> 
                    </div> 

                </div>  


                <div id='feature-content' className='card-panel'>
                    <div className='row'>
                        {/* <Comments /> */}
                    </div>
                </div>

            </div>
        </div>
    )
}

}

export default feature;