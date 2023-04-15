const connection = require('../config/database')

const getAllUsers = () =>{
    const sqlSelect ="SELECT * FROM siswa"
   return  connection.query(sqlSelect)
    
}

const createNewUsers = (body) => {
    const sqlInsert = `INSERT INTO siswa (nama,alamat,email) VALUES('${body.nama}','${body.alamat}','${body.email}')`

    return connection.query(sqlInsert)
}

const updateUsers = (body,idUser) => {
    const sqlUpdate = `UPDATE siswa SET nama='${body.nama}', alamat='${body.alamat}',email='${body.email}' WHERE id='${idUser}'`

    return connection.query(sqlUpdate)
}

const deleteUsers = (idUser) => {
    const sqlDelete = `DELETE FROM siswa WHERE id = ${idUser}`

    return connection.query(sqlDelete)
}

module.exports = {getAllUsers, createNewUsers, updateUsers, deleteUsers}