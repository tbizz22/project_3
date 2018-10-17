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
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
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
            status: 'none',
            team: 'none',
            image: '',
            created: '',
            newComment: '',
            featureId: '',
            redirectTo: '',
            disabled: true,
            showedit: true,
            loading: true,
            expectedDate: 'none',
            valueStatement: '',
            useCase: '',
            primaryPersona: 'none'
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
                    loading: false,
                    expectedDate: r.expectedDate,
                    valueStatement: r.valueStatement,
                    useCase: r.useCase,
                    primaryPersona: r.primaryPersona

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
        this.setState({ loading: true })

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
            description: this.state.description,
            expectedDate: this.state.expectedDate,
            valueStatement: this.state.valueStatement,
            useCase: this.state.useCase,
            primaryPersona: this.state.primaryPersona
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
                                            placeholder='Describe the feature'
                                        />
                                    </div>
                                    <div className='row'>
                                        <h6>Use Cases:</h6>
                                        <TextArea
                                            name='useCase'
                                            value={this.state.useCase}
                                            onChange={this.handleInputChange}
                                            placeholder='Describe the feature use cases'
                                            disabled={this.state.disabled}
                                        />
                                    </div>
                                    <div className='row'>
                                        <h6>Value Statements:</h6>
                                        <TextArea
                                            name='valueStatement'
                                            value={this.state.valueStatement}
                                            onChange={this.handleInputChange}
                                            placeholder='Describe the feature value statements'
                                            disabled={this.state.disabled}
                                        />
                                    </div>


                                    <div className='row'>
                                        <div className='col s6'>
                                            <div>
                                                <h6>Primary Persona:  </h6>
                                                <Select
                                                    value={this.state.primaryPersona}
                                                    onChange={this.handleInputChange}
                                                    inputProps={{
                                                        name: 'primaryPersona',
                                                        id: 'primaryPersona'
                                                    }}
                                                    fullWidth
                                                    disabled={this.state.disabled}
                                                >
                                                    <MenuItem value={'none'} disabled>
                                                        Choose an Option
                                                </MenuItem>
                                                    <MenuItem value={'Internal'}>Internal</MenuItem>
                                                    <MenuItem value={'Recruiter'}>Recruiter</MenuItem>
                                                    <MenuItem value={'Hiring Manager'}>Hiring Manager</MenuItem>
                                                    <MenuItem value={'Candidate'}>Candidate</MenuItem>
                                                    <MenuItem value={'Other'}>Other</MenuItem>
                                                </Select>
                                            </div>
                                        </div>
                                        <div className='col s6'>
                                            <div>
                                                <h6>Expected Delivery Date: </h6>
                                                <Select
                                                    value={this.state.expectedDate}
                                                    onChange={this.handleInputChange}
                                                    inputProps={{
                                                        name: 'expectedDate',
                                                        id: 'expectedDate'
                                                    }}
                                                    fullWidth
                                                    disabled={this.state.disabled}
                                                >
                                                    <MenuItem value={'none'} disabled>
                                                        Choose an Option
                                                </MenuItem>
                                                    <MenuItem value={'Q1 2019'}>Q1 2019</MenuItem>
                                                    <MenuItem value={'Q2 2019'}>Q2 2019</MenuItem>
                                                    <MenuItem value={'Q3 2019'}>Q3 2019</MenuItem>
                                                    <MenuItem value={'Q4 2019'}>Q4 2019</MenuItem>
                                                    <MenuItem value={'1H 2020'}>1H 2020</MenuItem>
                                                    <MenuItem value={'1H 2020'}>2H 2020</MenuItem>
                                                    <MenuItem value={'tbd'}>Other</MenuItem>
                                                </Select>
                                            </div>
                                        </div>
                                    </div>

                                    <div className='row'>
                                        <div className='col s6'>
                                            <div>
                                                <h6>Team:  </h6>
                                                <Select
                                                    value={this.state.team}
                                                    onChange={this.handleInputChange}
                                                    inputProps={{
                                                        name: 'team',
                                                        id: 'team',
                                                    }}
                                                    disabled={this.state.disabled}
                                                    fullWidth
                                                >
                                                    <MenuItem value={'none'} disabled>
                                                        Choose an Option
                                                </MenuItem>
                                                    <MenuItem value={'Alpha'}>Alpha</MenuItem>
                                                    <MenuItem value={'Bravo'}>Bravo</MenuItem>
                                                    <MenuItem value={'Charlie'}>Charlie</MenuItem>
                                                    <MenuItem value={'Delta'}>Delta</MenuItem>
                                                    <MenuItem value={'Other'}>Other</MenuItem>
                                                </Select>
                                            </div>
                                        </div>

                                        <div className='col s6'>
                                            <div>
                                                <h6>Status: </h6>
                                                <Select
                                                    value={this.state.status}
                                                    onChange={this.handleInputChange}
                                                    inputProps={{
                                                        name: 'status',
                                                        id: 'status',
                                                    }}
                                                    disabled={this.state.disabled}
                                                    fullWidth
                                                >
                                                    <MenuItem value={'none'} disabled>
                                                        Choose an Option
                                                </MenuItem>
                                                    <MenuItem value={'In Design'}>In Design</MenuItem>
                                                    <MenuItem value={'In Development'}>In Development</MenuItem>
                                                    <MenuItem value={'Beta'}>Beta</MenuItem>
                                                    <MenuItem value={'Limted Availability'}>Limited Availability</MenuItem>
                                                    <MenuItem value={'General Availability'}>General Availability</MenuItem>
                                                    <MenuItem value={'Other'}>Other</MenuItem>

                                                </Select>


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

                            {this.state.disabled ?
                                (<div id='comment-content' className='card-panel'>
                                    <div className='row'>
                                        <h6>Add a Comment</h6>
                                        <CommentList
                                            comments={this.state.comments[0]}
                                            addComment={this.addComment}
                                            handleInputChange={this.handleInputChange}
                                            value={this.state.newComment}
                                        />
                                    </div>
                                </div>)
                                : (null)
                            }
                        </div>
                    </div>
                )
            }
        }
    }

}

export default feature;