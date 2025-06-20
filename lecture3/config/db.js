const mongoose = require('mongoose');


const connectDb = async() => {
    try {
        const connection = await mongoose.connect(process.env.MONGODB_URI);
        console.log(`Mongodb Atlas connected successfully: ${connection.connection.host}`)
    } catch (error) {
        console.error(`Mongo db connection error:${error.message}` );
        process.exit(1)
    }
}


module.exports = connectDb;