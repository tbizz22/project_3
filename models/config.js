const mongoose = require('mongoose');
const schema = mongoose.Schema;

const configSchema = new Schema({
    config: {
        type: Mixed,
        required: true
    }    
}, {
    timestamps:true
});



const config = mongoose.model("config", configSchema)

module.exports = config;