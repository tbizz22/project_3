import React, { Component } from 'react';
import API from '../../utils/API';
import { Redirect } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { Input, FormBtn, TextArea } from '../../components/Form';
import Edit from '../../components/Edit';



class newfeature extends Component {
    constructor() {
        super()
        this.state = {
            title: '',
            status: '',
            team: '',
            image: null,
            disabled: false,
            redirectTo: null
        };
    }


    componentDidMount() {

    };


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
            description: this.state.description
        }).then(res => {
            const redir = `/features/${res.data._id}`
            this.setState({ redirectTo: redir })

        }).catch(function (err) {
            console.log(err);
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
            this.setState({image:image})
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

                    <div className='row'>
                        <h4 className='center-align'>{this.state.title ? (this.state.title) : ('Add a New Feature')}
                            <Edit
                                role={this.props.user.role}
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
                                    <div className='col s6'>
                                        <div>
                                            <h6>Team:  </h6>
                                            <Input
                                                name='team'
                                                value={this.state.team}
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
                                                onChange={this.handleInputChange}
                                            />
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