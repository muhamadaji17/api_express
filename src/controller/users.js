const usersModel = require('../models/users')

const getAllUsers = async (req, res) => {

    try {     
            const [data] = await usersModel.getAllUsers()
        
            res.json({
                message : "GET all users success",
                data
            })
    } catch (error) {
        res.status(500).json({
            message : "Server not found",
            serverMessage: error
        })
    }

}

const createNewUsers = async (req, res) => {
    // console.log(req.body)

    
    const {body} = req
    if(!body.req){
        return res.status(400).json({
            message : 'Data tidak sesuai',
            data : null
        })
    }
    try {
        await usersModel.createNewUsers(body)
        res.status(201).json({
            message : "CREATE new users success",
          data:  body 
        })
    } catch (error) {
        res.status(500).json({
            message : "Server not found",
            serverMessage: error
        })
    }
}
 
const updateUsers = async (req, res) => {
    const {idUser} = req.params
    const {body} = req
    try {
        await usersModel.updateUsers(body,idUser)
        res.json({
            message : "UPDATE success",
            data : {
                id: idUser,
                ...body
            }
        })
    } catch (error) {
        res.status(500).json({
            message : "Server not found",
            serverMessage: error
        })
    }
}

const deleteUsers = async(req, res) => {
    const {idUser} = req.params

    try {
        await usersModel.deleteUsers(idUser)
        res.json({
            message : "DELETE success",
            data : null
        })
    } catch (error) {
        res.status(500).json({
            message : "Server not found",
            serverMessage: error
        })
    }
}

module.exports = {getAllUsers,createNewUsers, updateUsers, deleteUsers}