const {Schema, model} = require('mongoose');

const {UserRoles} = require('../constants');
const {passwordService} = require('../service');

const userSchema = new Schema({
    Username:{
        type: String,
        unique: true,
        required: true,
        trim: true
    },
    FirstName: {
        type: String,
        required: true,
        trim: true,
        minlength: 3,
        maxlength: 15
    },
    LastName: {
        type: String,
        required: true,
        trim: true,
        minlength: 3,
        maxlength: 15
    },
    email: {
        type: String,
        required: true,
        trim: true,
        select: true
    },
    password: {
        type: String,
        required: true,
        trim: true,
        select: false,
        minlength: 8
    },
    role: {
        type: String,
        enum: Object.values(UserRoles)
    },
}, {timestamps: true, toObject: {virtuals: true}, toJSON: {virtuals: true}});

module.exports = model('users', userSchema);
