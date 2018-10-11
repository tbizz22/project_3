import React, { Component } from 'react';
import API from '../../utils/API';

class features extends Component {
    state = {
        features: [],
        
    };

    componentDidMount() {
        this.getFeatures();
    };

    getFeatures = () => {
        API.getFeatures()
            .then(res => 
                this.setState({features: res.data})
                )
                .catch(err => console.log(err));
    }

    render() {
        return (
            <div>
                features component
        </div>
        )
    }

}

export default features;