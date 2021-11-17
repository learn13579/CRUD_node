const Joi = require('joi');

const {Regex: {EMAIL_REGEX, PASSWORD_REGEX, LOGIN_REGEX}} = require('../constants');

const updateUserValidator = Joi.object({
    username: Joi
        .string()
        .regex(LOGIN_REGEX)
        .required()
        .trim(),
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
});

module.exports = {updateUserValidator};
