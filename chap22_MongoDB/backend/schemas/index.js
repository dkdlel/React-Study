const mongoose = require('mongoose');
require('dotenv').config();

module.exports = () => {
    const connect = () => {
        mongoose
            .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false })
            .then(() => console.log('Connected to MongoDB'))
            .catch(e => console.log(e));
    };
    connect();
}