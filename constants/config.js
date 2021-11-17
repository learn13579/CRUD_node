module.exports = {
    HOST_URL: process.env.HOST_URL || 'http://localhost:5000',
    PORT: process.env.PORT || 5000,

    MONGO_CONNECT_URL: process.env.MONGO_CONNECT_URL || 'mongodb://localhost:27017/MyBaseCRUD',

    ALLOWED_ORIGIN: process.env.ALLOWED_ORIGIN || 'http://localhost:3000',
};
