module.exports = {
    PASSWORD_REGEX: new RegExp(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/),
    EMAIL_REGEX: new RegExp('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\\.[a-zA-Z0-9-.]+$'),
    NAME_REGEX: new RegExp('^[a-z_-]{3,20}$'),
    LOGIN_REGEX: new RegExp('^[a-z0-9_-]{3,16}$'),
};
