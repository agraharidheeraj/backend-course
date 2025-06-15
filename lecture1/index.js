const express = require('express');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const PORT = process.env.PORT;

app.get('/me', (req,res) => {
    res.send("Hello from backend server")
})


app.listen(PORT , () => {
    console.log(`sever running on this PORT ${PORT}`)
})