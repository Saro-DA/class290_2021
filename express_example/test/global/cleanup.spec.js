const mongoose = require('mongoose')

after(async function () {
    await mongoose.connection.close();
})