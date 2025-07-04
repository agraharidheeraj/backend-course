const express = require('express');
const { getUsers, getUser, createUser, updateUser, deleteUser } = require('../controllers/userController');


const router = express.Router();

//CURD Routes
router.get('/',getUsers)
router.get('/:id',getUser)
router.post('/',createUser)
router.put('/:id',updateUser)
router.delete('/:id',deleteUser)

module.exports = router;