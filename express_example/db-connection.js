const mongoose = require('mongoose');

mongoose.connect(process.env.DATABASE_HOST, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true
})

const connection = mongoose.connection;

connection.once('open', function() {
    console.log("Mongodb database connection established successfully.");
})