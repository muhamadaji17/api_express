const express = require('express')

const userController = require('../controller/users')

const router = express.Router()

router.get('/', userController.getAllUsers)

router.post('/', userController.createNewUsers)

router.patch('/:idUser', userController.updateUsers)

router.delete('/:idUser', userController.deleteUsers)

module.exports=router