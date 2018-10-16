import React, { Component } from 'react';
import API from '../../utils/API';
import { List, ListItem } from '../../components/list';
import { Helmet } from 'react-helmet';
import Notifications, {notify} from 'react-notify-toast';
const toastColor = { 
    background: '#505050', 
    text: '#fff' 
  }


class features extends Component {
    state = {
        features: [],

    };

    componentDidMount() {
        this.getFeatures();
    };

    toast = notify.createShowQueue();

    getFeatures = () => {
        API.getFeatures()
            .then(res => {
                this.setState({ features: res.data })
            })
            .catch(err => {
                this.toast(err.message, 'custom', 2000, toastColor)
            })                           
    }





    render() {
        return (
            <div>
                <Helmet>
                    <style>{'body { background-color: #778899 ; }'}</style>
                </Helmet>
                <Notifications />
                
                <div className='row'>
                        <h4 className='center-align'>Features</h4>
                    </div>
                    
                
                <List>
                    {this.state.features.map(feature => {
                        return (
                            <ListItem
                                key={feature._id}
                                title={feature.title}
                                status={feature.status}
                                createdAt={feature.createdAt}
                                team={feature.team}
                                id={feature._id}
                            />
                        )
                    })
                    }
                </List>
            </div>
        )
    }

}

export default features;