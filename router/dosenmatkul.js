const express = require("express");
const dosenMatkulController = require("../controller/dosenMatkulController");
const routeDosenMatkulController = express.Router()

routeDosenMatkulController.post('/',dosenMatkulController.create)
routeDosenMatkulController.get('/get',dosenMatkulController.getAll)
routeDosenMatkulController.get('/get/:id',dosenMatkulController.getById)
routeDosenMatkulController.put('/update/:id',dosenMatkulController.update)
routeDosenMatkulController.delete('/delete/:id',dosenMatkulController.delete)
module.exports = routeDosenMatkulController