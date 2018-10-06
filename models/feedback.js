const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const feedbackSchema = new Schema({

    body: {
        type: String,
        required: true
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    image: {
        data: Buffer,
        contentType: String
    },
    createdAt: {
        type: Date,
        default: Date.Now
    }
}, {
    timestamps: true
});



const Feedback = mongoose.model("Feedback", feedbackSchema)

module.exports = Feedback;