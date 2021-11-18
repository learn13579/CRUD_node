const Joi = require('joi');

const {Regex: {NAME_REGEX, LOGIN_REGEX, PASSWORD_REGEX, EMAIL_REGEX}} = require('../constants');
const UserRoles = require('../constants');

const createUserValidator = Joi.object({
    username: Joi
        .string()
        .regex(LOGIN_REGEX)
        .required()
        .trim(),
    firstname: Joi
        .string()
        .regex(NAME_REGEX)
        .trim()
        .required()
        .lowercase(),
    lastname: Joi
        .string()
        .regex(NAME_REGEX)
        .alphanum()
        .trim()
        .required()
        .lowercase(),
    email: Joi
        .string()
        .regex(EMAIL_REGEX)
        .required()
        .trim(),
    password: Joi
        .string()
        .regex(PASSWORD_REGEX)
        .required()
        .trim()
        .min(8),
    type: Joi.string()
        .allow(...Object.values(UserRoles)),
});

module.exports = {createUserValidator}
