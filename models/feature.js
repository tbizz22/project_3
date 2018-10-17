const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const featureSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    team: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true
    },
    image: {
        type: String
    },
    createdAt: {
        type: Date,
        default: Date.Now
    },
    description: {
        type: String
    },
    expectedDate: {
        type: String
    },
    valueStatement: {
        type: String
    },
    useCase: {
        type: String
    },
    primaryPersona: {
        type:String
    },
    comments: [{
        type: Schema.Types.ObjectId,
        ref: 'Feedback'
    }]
}, {
    timestamps: true
});



const Feature = mongoose.model("Feature", featureSchema)

module.exports = Feature;