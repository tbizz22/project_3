import React, { Component } from 'react';
import API from '../../utils/API';
import './feature.css';
import CommentList from '../../components/CommentList';
import { Redirect } from 'react-router-dom';
import { Helmet } from 'react-helmet';


class feature extends Component {
    constructor() {
        super()
       this.state = {
            title: '',
            comments: [],
            status: '',
            team: '',
            image: '',
            created: '',
            newComment: '',
            featureId: '',
            redirectTo: ''
        };
        this.getFeature = this.getFeature.bind(this)
        

    }
   

    componentDidMount() {
        const featureId = this.props.match.params.id;
        this.setState({ featureId: featureId })
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
                    description: r.description,
                    addComment: '',
                    featureId: r._id
                })
            })
            .catch(err => { console.log(err) });
    }

    addComment = (e) => {
        //assemble comment values for model
        // post to add comment
        //put to update feature
        //clear add commment value from state
        //reload comments
        e.preventDefault();
        const body = this.state.newComment;
        const user = this.props.user._id;

        API.createFeedback({
            body: body,
            user: user
        }).then(res => {
            API.updateFeature(this.state.featureId, {
                $push: {
                    comments: res.data._id
                }
            }, {
                    new: true
                })
                .then(res => {                   
                    console.log(res.data._id);
                    this.getFeature(this.state.featureId)
                })
                .catch(function (err) {
                    console.log(err);
                })
        }).catch(function (err) {
            console.log(err);
        })
        this.setState({
            newComment:''
        })
        this.getFeature(this.state.featureId)
    }





    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    }







    render() {

        if (this.state.redirectTo) {
            return <Redirect to={{ pathname: this.state.redirectTo }} />
        } else {

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
                            <img className='responsive-img max-height center-align' src={`/images/${this.state.image}`} alt='Feature' />
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
                                <CommentList
                                    commments={this.state.comments[0]}
                                    addComment={this.addComment}
                                    handleInputChange={this.handleInputChange}
                                    value = {this.state.newComment}
                                />
                            </div>
                        </div>

                    </div>
                </div>
            )
        }
    }

}

export default feature;