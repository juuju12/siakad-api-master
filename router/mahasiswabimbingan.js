const express = require("express");
const mahasiswabimbinganController = require("../controller/mahasiswabimbinganController");
const routeMahasiswaBimbinganController = express.Router()

routeMahasiswaBimbinganController.post('/',mahasiswabimbinganController.create)
routeMahasiswaBimbinganController.get('/get',mahasiswabimbinganController.getAll)
routeMahasiswaBimbinganController.get('/get/:id',mahasiswabimbinganController.getById)
routeMahasiswaBimbinganController.put('/update/:id',mahasiswabimbinganController.update)
routeMahasiswaBimbinganController.delete('/delete/:id',mahasiswabimbinganController.delete)
module.exports = routeMahasiswaBimbinganController