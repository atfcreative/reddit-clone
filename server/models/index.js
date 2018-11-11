const mongoose = require('mongoose');
const port = 27017;
const url = `mongodb://localhost:${port}/server`;

mongoose.connect(url, {useNewUrlParser: true })
    .then(() => console.log(`MongoDB connected on port ${port}...`))
    .catch(err => console.log(err));

module.exports.TextPost = require('./textPost');
module.exports.Comment = require('./comment');

