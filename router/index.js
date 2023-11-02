const express = require("express");
const exampleController = require("../controller/exampleController");
const routeMahasiswa = require("./mahasiswa");
const routeDosen = require("./dosen");
const routeMatkul = require("./matkul");
const routeDosenMatkul = require("./dosenmatkul");
const routemahasiswabimbingan = require("./mahasiswabimbingan");
const routejadwalmatakuliah = require("./jadwalmatakuliah");
const route = express.Router()

route.get('/',exampleController.index)
route.use('/mahasiswa',routeMahasiswa)
route.use('/dosen',routeDosen)
route.use('/matkul',routeMatkul)
route.use('/dosen-matkul',routeDosenMatkul)
route.use('/mahasiswa-bimbingan',routemahasiswabimbingan)
route.use('/jadwal-matkul',routejadwalmatakuliah)
module.exports = route
