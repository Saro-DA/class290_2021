const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/blog', {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true
})

const connection = mongoose.connection;

connection.once('open', function() {
    console.log("Mongodb database connection established successfully.");
})