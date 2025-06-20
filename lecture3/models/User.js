const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({
    username: {
        type:String,
        required:[true, 'username is required'],
        trim:true,
        minlength: [3, 'username must be at least 3 characters']
    },
    email : {
        type:String,
        required:[true, 'email is required'], 
        unique:true,
       lowercase: true,
       match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    },
    age: {
        type:Number,
        default:18,
        min:[1,'Age can not be negative']
    }
}
,{timestamps:true}
)


module.exports= mongoose.model('User', userSchema)