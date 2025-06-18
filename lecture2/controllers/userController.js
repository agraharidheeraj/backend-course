
let users = [
    {id:1,name:"Dheeraj Agrahari", email:"dheeraj700agrahari@gmail.com"},
    {id:2, name:"Rishabh Gupta", email:"rishabh123@gmail.com"}
];


//get all users;
exports.getUsers = (req,res) => {
    res.status(200).json({message:'users get successfully',success:true,users})
}


exports.getUser = (req,res) => {
    const id = Number(req.params.id);
    const user = users.find(u => u.id === id);
    if(!user) {
            res.status(500).json({message:'user not found',success:false})
    }
        res.status(200).json({message:'user get successfully',success:true,user})
}


exports.createUser = (req,res)=> {
    const {name,email} = req.body;
    const newUser = {id:4,name,email};
    users.push(newUser);
    res.status(200).json({message:'user created successfully',success:true,newUser})
}


exports.updateUser = (req,res) => {
         const id = Number(req.params.id);
    const user = users.find(u => u.id === id);
        if(!user) {
            res.status(500).json({message:'user not found',success:false})
    }

    const {name,email} = req.body;
    if(name) user.name = name;
    if(email) user.email = email;

        res.status(200).json({message:'user upadte successfully',success:true,user})
}

exports.deleteUser = (req,res) => {
             const id = Number(req.params.id);
    const user = users.find(u => u.id === id);
        if(!user) {
            res.status(500).json({message:'user not found',success:false})
    }
    users= users.filter(u => u.id !=id)
        res.status(200).json({message:'user deleted successfully',success:true,users})
}

