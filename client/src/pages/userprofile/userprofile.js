import React, { Component } from 'react';
import API from '../../utils/API';
import { Helmet } from 'react-helmet';
import Edit from '../../components/Edit';
import { Input, FormBtn } from '../../components/Form';
import Preload from '../../components/preloader';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';



class userprofile extends Component {
    constructor() {
        super()
        this.state = {
            userId: '1',
            username: 'noOne',
            role: 'none',
            email: '',
            firstName: '',
            lastName: '',
            udpated: '',
            created: '',
            showedit: true,
            disabled: true,
            loading: true,
            labelWidth: 0
        };
    }

    componentDidMount() {
        const userId = this.props.match.params.id;
        this.setState({ userId: userId })
        this.getUser(userId);
        this.setState({
            labelWidth: 100
        });
    }

    getUser = (id) => {

        API.getUser(id)
            .then(res => {
                const r = res.data
                this.setState({
                    username: r.userName,
                    email: r.email,
                    firstName: r.firstName,
                    lastName: r.lastName,
                    role: r.role,
                    updated: r.updatedAt,
                    created: r.createdAt,
                    userId: r._id,
                    loading: false,

                })
            }).catch(err => { console.log(err) });
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
            showedit: false,
            loading: false,
        })
    }

    handleSave = event => {

        API.updateUser(this.state.userId, {
            username: this.state.userName,
            email: this.state.email,
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            role: this.state.role
        })
            .then(res => {
                this.setState({
                    disabled: true,
                    showedit: true,
                    loading: false,
                })
            }).catch(function (err) {
                console.log(err);
            })


    }

    render() {
        if (this.state.loading === true) {
            return <Preload />
        } else {

            return (
                <div>
                    <Helmet>
                        <style>{'body { background-color: #778899 ; }'}</style>
                    </Helmet>

                    <div className='row'>
                        <h4 className='center-align'>User Profile
                            <Edit
                                role='admin'
                                showedit={this.state.showedit}
                                onClick={this.handleEdit}
                            />
                        </h4>
                    </div>

                    <div className='row'>

                        <div className='container'>
                            <div className='card-panel'>
                                <div className='row'>
                                    <div className='col s3'>
                                        <img className='responsive-img center-align' src={`https://api.adorable.io/avatars/400/${this.state.userId}.png`} alt='user avatar'></img>
                                    </div>

                                    <div className='col s9'>
                                        <form className='col s12 container'>
                                            <div className='row'>
                                                <h6>First Name: </h6>
                                                <Input
                                                    name='firstName'
                                                    value={this.state.firstName}
                                                    disabled={this.state.disabled}
                                                    onChange={this.handleInputChange}
                                                />

                                                <h6>Last Name: </h6>
                                                <Input
                                                    name='lastName'
                                                    value={this.state.lastName}
                                                    disabled={this.state.disabled}
                                                    onChange={this.handleInputChange}
                                                />
                                            </div>
                                            <div className='row'>
                                                <h6>Email: </h6>
                                                <Input
                                                    name='email'
                                                    value={this.state.email}
                                                    disabled={this.state.disabled}
                                                    onChange={this.handleInputChange}
                                                />
                                            </div>
                                            <div className='row'>
                                                <h6>Username: </h6>
                                                <Input
                                                    name='username'
                                                    value={this.state.username}
                                                    disabled={this.state.disabled}
                                                    onChange={this.handleInputChange}
                                                />
                                            </div>
                                  
                                            <div className='row'>
                                            <h6>Role: </h6>
                                                <Select
                                                    value={this.state.role}
                                                    onChange={this.handleInputChange}
                                                    inputProps={{
                                                        name: 'role',
                                                        id: 'role',
                                                    }}
                                                    placeholder = 'Choose an Option'
                                                    disabled={this.state.disabled}
                                                    fullWidth
                                                >
                                                    <MenuItem value={'Help Desk'}>Help Desk</MenuItem>
                                                    <MenuItem value={'Account Manager'}>Account Manager</MenuItem>
                                                    <MenuItem value={'Sales'}>Sales</MenuItem>
                                                    <MenuItem value={'Technology'}>Technology</MenuItem>
                                                    <MenuItem value={'Other'}>Other</MenuItem>
                                                    <MenuItem value={'admin'}>admin</MenuItem>

                                                </Select>
                                            </div>
                                            <div className='row'>
                                                <h6>Created: </h6>
                                                <Input
                                                    name='created'
                                                    value={this.state.created}
                                                    disabled={true}
                                                    onChange={this.handleInputChange}
                                                    time={1}
                                                />
                                            </div>
                                            <div className='row'>
                                                <h6>Updated: </h6>
                                                <Input
                                                    name='updated'
                                                    value={this.state.updated}
                                                    disabled={true}
                                                    onChange={this.handleInputChange}
                                                    time={1}
                                                />
                                            </div>
                                            <div className='row'>
                                                <FormBtn
                                                    onClick={this.handleSave}
                                                    dontshow={!this.state.disabled}
                                                >Save</FormBtn>
                                            </div>

                                        </form>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }

    }

}

export default userprofile;