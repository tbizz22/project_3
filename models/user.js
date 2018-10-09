const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcryptjs');
mongoose.promise = Promise

const userSchema = new Schema({
    userName: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true        
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    role: {
        type: String,
        required: false
    },
    createdAt: {
        type: Date,
        default: Date.Now
    }
}, {
    timestamps: true
});


userSchema.methods = {
    checkPassword: function (inputPassword) {
        return bcrypt.compareSync(inputPassword, this.password)
    },

    hashPassword: plainTextPassword => {
        return bcrypt.hashSync(plainTextPassword, 10)
    }
};

userSchema.pre('save', function (next) {
    if (!this.password) {
        console.log('no pw sent');
        next();
    } else {
        this.password = this.hashPassword(this.password);
        next();
    }
})


const User = mongoose.model("User", userSchema)
module.exports = User;