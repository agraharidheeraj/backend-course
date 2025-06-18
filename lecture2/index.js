const express = require('express');
const dotenv = require('dotenv');
const logger = require('./utlis/logger');
const userRoute = require('./routes/userRoute')

dotenv.config();

const app = express();
const PORT = process.env.PORT;


app.use(express.json());
app.use(logger)

app.get('/', (req,res) => {
    res.send("Hello from backend server")
})


app.use('/api/users', userRoute)


 app.post('/log', (req,res) => {
    console.log('Headers',req.headers);
    console.log('Body',req.body);
    res.send('logging request details')
 })


 app.get('/search', (req,res)=> {
    const {keyword,page} = req.query;
    res.send(`search for ${keyword} on page ${page}`)
 })


 app.get('/error', (req,res,next) => {
    const error = new Error('Something went wrong');
    next(error)
 })


 //Error handler
 app.use((err,req,res,next) => {
    console.error(err.stack);
    res.status(500).json({message:'Internal Server error'})
 })


  //unknow route
 app.use((req,res,next) => {
    res.status(404).json({message:"Route not found"});
    next();
 })



app.listen(PORT , () => {
    console.log(`sever running on this PORT ${PORT}`)
})