import React, { Component } from 'react';
import API from '../../utils/API';
import { Redirect } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { Input, FormBtn, TextArea } from '../../components/Form';
import Edit from '../../components/Edit';
import Notifications, { notify } from 'react-notify-toast';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
const toastColor = {
    background: '#505050',
    text: '#fff'
}


class newfeature extends Component {
    constructor() {
        super()
        this.state = {
            title: '',
            status: 'none',
            team: 'none',
            image: null,
            disabled: false,
            redirectTo: null,
            expectedDate: 'none',
            valueStatement: '',
            useCase: '',
            primaryPersona: 'none'
        };
    }


    componentDidMount() {

    };

    toast = notify.createShowQueue();


    image = (imageState) => {
        if (imageState !== null) {
            return (
                <div className='center-align'>
                    <img className='responsive-img max-height center-align' src={imageState} alt='Feature' />
                </div>
            )
        } else {
            return null
        }
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
        event.preventDefault();
        API.createFeature({
            title: this.state.title,
            team: this.state.team,
            image: this.state.image,
            status: this.state.status,
            description: this.state.description,
            expectedDate: this.state.expectedDate,
            valueStatement: this.state.valueStatement,
            useCase: this.state.useCase,
            primaryPersona: this.state.primaryPersona
        }).then(res => {
            const redir = `/features/${res.data._id}`
            this.setState({ redirectTo: redir })

        }).catch(error => {
            this.toast(error.message, 'custom', 2000, toastColor)
        })
    }

    handleImageUpload = event => {
        event.preventDefault();
        const errs = []
        const files = Array.from(event.target.files)
        const formData = new FormData()
        const types = ['image/png', 'image/jpeg', 'image/gif']

        files.forEach((file, i) => {

            if (types.every(type => file.type !== type)) {
                errs.push(`'${file.type}' is not a supported format`)
            }

            if (file.size > 150000) {
                errs.push(`'${file.name}' is too large, please pick a smaller file`)
            }

            formData.append(i, file)
        })

        API.createImage(formData)
            .then(res => {
                const image = res.data[0].url
                this.setState({ image: image })
            }).catch(error => {
                this.toast(error.message, 'custom', 2000, toastColor)
            })
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
                    <Notifications />
                    <div className='row'>
                        <h4 className='center-align'>{this.state.title ? (this.state.title) : ('Add a New Feature')}
                            <Edit
                                role={this.props.role}
                                showedit={this.state.showedit}
                                onClick={this.handleEdit}
                            />
                        </h4>
                    </div>

                    <div className='container mt-20'>

                        {this.image(this.state.image)}

                        <form>
                            <div id='feature-content' className='card-panel'>
                                <div className='row'>
                                    <h6>Title:</h6>
                                    <Input
                                        name='title'
                                        value={this.state.title}
                                        onChange={this.handleInputChange}
                                        placeholder='Add a New Feature'
                                    />
                                </div>
                                <div className='row'>
                                    <h6>Description:</h6>
                                    <TextArea
                                        name='description'
                                        value={this.state.description}
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
                                    />
                                </div>
                                <div className='row'>
                                    <h6>Value Statements:</h6>
                                    <TextArea
                                        name='valueStatement'
                                        value={this.state.valueStatement}
                                        onChange={this.handleInputChange}
                                        placeholder='Describe the feature value statements'
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
                                                    id: 'team'
                                                }}

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
                                    <div className='col s6'>
                                        <div>
                                            <h6>Image:  </h6>
                                            <Input
                                                type='file'
                                                name='image'
                                                onChange={this.handleImageUpload}
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


                    </div>
                </div>
            )
        }
    }

}

export default newfeature;