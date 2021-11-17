const express = require('express');
const mongoose = require('mongoose');

require('dotenv').config();
const {Config :{MONGO_CONNECT_URL, PORT}} = require('./constants');
const {userRouter} = require('./router');
const {ErrorsStatus: {status500}} = require('./errorsCustom');

const app = express();

mongoose.connect(MONGO_CONNECT_URL);

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/users', userRouter);

app.use('*', (err, req, res, next) => {
    res
        .status(err.status || status500)
        .json({
            msg: err.message
        });
});

app.listen(PORT, () => {
    console.log(`App listen ${PORT}`);
});
