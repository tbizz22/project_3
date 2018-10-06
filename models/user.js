const mongoose = require('mongoose');
const schema = mongoose.Schema;

const userSchema = new Schema({
    userName: {

    },
    password: {

    },
    firstName: {

    },
    lastName: {

    },
    email: {

    },
    role: {

    },
    createdAt: {
        type: Date,
        default: Date.Now
    }
}, {
    timestamps: true
});



const User = mongoose.model("User", userSchema)

module.exports = User;