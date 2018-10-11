import axios from 'axios';


export default {
// feature
getFeatures: function() {
    return axios.get('/api/feature');
},

getFeature: function(id) {
    return axios.get('/api/feature/' + id)
},

createFeature: function(featureData) {
    return axios.post('/api/feature', featureData)
},

updateFeature: function(id, featureData) {
    return axios.put('/api/feature/' + id, featureData)
},

deleteFeature: function(id) {
    return axios.delete('/api/feature/' + id)
},






// feedback

// gets individual comment
getFeedback: function(id) {
    return axios.get('/api/feedback/' + id)
},

createFeedback: function(feedbackData) {
    return axios.post('/api/feedback', feedbackData)
},

updateFeedback: function(id, feedbackData) {
    return axios.put('/api/feedback/' + id, feedbackData)
},

deleteFeedback: function(id) {
    return axios.delete('/api/feedback/' + id)
},





//user

getUsers: function() {
    return axios.get('/api/user');
},

getUser: function(id) {
    return axios.get('/api/user/' + id)
},

createUser: function(userData) {
    return axios.post('/api/user', userData)
},

updateUser: function(id, userData) {
    return axios.put('/api/user/' + id, userData)
},

deleteUser: function(id) {
    return axios.delete('/api/user/' + id)
}



//config






}