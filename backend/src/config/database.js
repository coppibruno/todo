const mongoose = require('mongoose');

// const url = 'mongodb://admin:admin@localhost:27017/todo?authMode=scram-sha1';
const url = 'mongodb://admin:admin@localhost:27017/?authSource=admin&readPreference=primary&appname=MongoDB%20Compass&ssl=false';

mongoose.connect(url, {useNewUrlParser: true} );

module.exports = mongoose;