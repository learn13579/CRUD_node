const {Schema, model} = require('mongoose');

const {UserRoles} = require('../constants');

const userSchema = new Schema({
    username:{
        type: String,
        unique: true,
        required: true,
        trim: true
    },
    firstname: {
        type: String,
        required: true,
        trim: true,
    },
    lastname: {
        type: String,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        trim: true,
    },
    password: {
        type: String,
        required: true,
        trim: true,
        select: false,
    },
    role: {
        type: String,
        enum: Object.values(UserRoles)
    },
}, {timestamps: true, toObject: {virtuals: true}, toJSON: {virtuals: true}});

module.exports = model('users', userSchema);
