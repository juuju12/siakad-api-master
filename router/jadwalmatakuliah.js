const express = require("express");
const jadwalmatakuliahController = require("../controller/jadwalmatakuliahController");
const routeJadwalMataKuliahController = express.Router()

routeJadwalMataKuliahController.post('/',jadwalmatakuliahController.create)
routeJadwalMataKuliahController.get('/get',jadwalmatakuliahController.getAll)
routeJadwalMataKuliahController.get('/get/:id',jadwalmatakuliahController.getById)
routeJadwalMataKuliahController.put('/update/:id',jadwalmatakuliahController.update)
routeJadwalMataKuliahController.delete('/delete/:id',jadwalmatakuliahController.delete)
module.exports = routeJadwalMataKuliahController