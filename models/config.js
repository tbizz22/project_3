const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const configSchema = new Schema({}, {
    timestamps:true
});



const config = mongoose.model("config", configSchema)

module.exports = config;