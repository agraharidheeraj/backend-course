const express = require('express');
const dotenv = require('dotenv');
const connectDb = require('./config/db');
const userRoute = require('./routes/userRoute')

dotenv.config();

const app = express();
const PORT = process.env.PORT;



app.use(express.json());

app.get('/me', (req,res) => {
    res.send("Hello from backend server")
})


app.use('/api',userRoute)


app.listen(PORT , () => {
    connectDb();
    console.log(`sever running on this PORT ${PORT}`)
})