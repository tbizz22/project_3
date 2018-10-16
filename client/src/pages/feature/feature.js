import React, { Component } from 'react';
import API from '../../utils/API';
import './feature.css';
import CommentList from '../../components/CommentList';
import { Redirect } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { Input, FormBtn, TextArea } from '../../components/Form';
import Edit from '../../components/Edit';
import Notifications, { notify } from 'react-notify-toast';
import Preload from '../../components/preloader';
const toastColor = {
    background: '#505050',
    text: '#fff'
}


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
            redirectTo: '',
            disabled: true,
            showedit: true,
            loading: true
        };
        this.getFeature = this.getFeature.bind(this)


    }


    componentDidMount() {
        const featureId = this.props.match.params.id;
        this.setState({ featureId: featureId })
        this.getFeature(featureId);
    };

    toast = notify.createShowQueue();

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
                    featureId: r._id,
                    loading: false
                    
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
        this.setState({loading:true})

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
                .catch(error => {
                    this.toast(error.message, 'custom', 2000, toastColor)
                })
        }).catch(error => {
            this.toast(error.message, 'custom', 2000, toastColor)
        })
        this.setState({
            newComment: ''
        })
        this.getFeature(this.state.featureId)
    }


    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    }

    handleEdit = event => {
        this.setState({
            disabled: false,
            showedit: false
        })
    }

    handleSave = event => {

        API.updateFeature(this.state.featureId, {
            title: this.state.title,
            team: this.state.team,
            status: this.state.status,
            description: this.state.description
        }).then(res => {
            this.setState({
                disabled: true,
                showedit: true,
                loading: false
            })
        }).catch(error => {
            this.toast(error.message, 'custom', 2000, toastColor)
        })

    }

    render() {

        if (this.state.redirectTo) {
            return <Redirect to={{ pathname: this.state.redirectTo }} />
        } else {

            if (this.state.loading === true) {
                return <Preload />
            } else {

                return (
                    <div>
                        <Helmet>
                            <style>{'body { background-color: #778899 ; }'}</style>
                        </Helmet>
                        <Notifications />
                        <div className='row'>
                            <h4 className='center-align'>{this.state.title}
                                <Edit
                                    role={this.props.user.role}
                                    showedit={this.state.showedit}
                                    onClick={this.handleEdit}
                                />
                            </h4>
                        </div>

                        <div className='container'>
                            <div className='center-align'>
                                <img className='responsive-img max-height center-align' src={this.state.image} alt='Feature' />
                            </div>
                            <form>
                                <div id='feature-content' className='card-panel'>
                                    <div className='row'>
                                        <h6>Description:</h6>
                                        <TextArea
                                            name='description'
                                            value={this.state.description}
                                            disabled={this.state.disabled}
                                            onChange={this.handleInputChange}
                                        />

                                    </div>

                                    <div className='row'>
                                        <div className='col s6'>
                                            <div>
                                                <h6>Team:  </h6>
                                                <Input
                                                    name='team'
                                                    value={this.state.team}
                                                    disabled={this.state.disabled}
                                                    onChange={this.handleInputChange}
                                                />
                                            </div>
                                        </div>

                                        <div className='col s6'>
                                            <div>
                                                <h6>Status: </h6>
                                                <Input
                                                    name='status'
                                                    value={this.state.status}
                                                    disabled={this.state.disabled}
                                                    onChange={this.handleInputChange}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <FormBtn
                                            onClick={this.handleSave}
                                            dontshow={!this.state.disabled}
                                        >Save</FormBtn>
                                    </div>
                                </div>
                            </form>


                            <div id='comment-content' className='card-panel'>
                                <div className='row'>
                                    <h6>Add a Comment</h6>
                                    <CommentList
                                        comments={this.state.comments[0]}
                                        addComment={this.addComment}
                                        handleInputChange={this.handleInputChange}
                                        value={this.state.newComment}
                                    />
                                </div>
                            </div>

                        </div>
                    </div>
                )
            }
        }
    }

}

export default feature;