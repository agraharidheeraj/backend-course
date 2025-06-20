const User = require('../models/User');
const { errorResponse, successResponse } = require('../utils/responseHandler');



exports.createUser = async(req,res) => {
    try {
    const {username,email,age} = req.body;
    
   const existingUser =  await User.findOne({email});
   if(existingUser){
     return errorResponse(res,'email alredy exists',400)
   } 
   const newUser = await User.create({username,email,age});
   return successResponse(res,'User created successfully',newUser,201)
    } catch (error) {
           return errorResponse(res,error.message,500)
    }
}



exports.getAllUsers = async(req,res) => {
    try {
        const users = await User.find();
        return successResponse(res, 'users get successfully', users)
    } catch (error) {
           return errorResponse(res,'error fetching users',error.message,500)
    }
}

exports.getUser = async(req,res) => {
    try {
        const {id} = req.params;
            const user = await User.findById(id);
            if(!user){
                     return errorResponse(res,'User not found',404)
            }
            return successResponse(res,'User get successfully',user)
    } catch (error) {
              return errorResponse(res,'error fetching user details',error.message,500) 
    }
}

exports.updateUserById = async(req,res) =>{
    try {
                const {id} = req.params;
            const user = await User.findById(id);
            if(!user){
                     return errorResponse(res,'User not found',404)
            }


            //step 2 update the user
            const updateUser = await User.findByIdAndUpdate(id, req.body, {
                new:true,
                runValidators:true
            })

            return successResponse(res,'user updated successfully',updateUser)
    } catch (error) {
           return errorResponse(res,'failed to update user details',error.message,500) 
    }
}



exports.deleteUserById = async(req,res) =>{
    try {
            const {id} = req.params;
            const user = await User.findById(id);
            if(!user){
                     return errorResponse(res,'User not found',404)
            }
            //step 2 delete the user
           await User.findByIdAndDelete(id)

            return successResponse(res,'user deleted successfully')
    } catch (error) {
           return errorResponse(res,'failed to delete user',error.message,500) 
    }
}