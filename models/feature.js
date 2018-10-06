const mongoose = require('mongoose');
const schema = mongoose.Schema;

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
        data: Buffer,
        contentType: String
    },
    createdAt: {
        type: Date,
        default: Date.Now
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