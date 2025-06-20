const express = require('express');
const { createUser, getAllUsers, getUser, updateUserById, deleteUserById} = require('../controllers/userController');


const router = express.Router();

//CURD Routes
router.post('/create-user',createUser)

router.get('/users',getAllUsers)

router.get('/user/:id',getUser)


router.put('/user/:id',updateUserById)


router.delete('/user/:id',deleteUserById)

module.exports = router;