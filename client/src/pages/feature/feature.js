import React, { Component } from 'react';
import API from '../../utils/API';

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
                    created: r.createdAt
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
                <h4 className='center-align'>Features</h4>
            </div>


        </div>
    )
}

}

export default feature;