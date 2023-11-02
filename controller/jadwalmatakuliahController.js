const {MataKuliah,JadwalMataKuliah} = require('../models')

const jadwalmatakuliahController = {}

/*
    this is auto generate example, you can continue 

*/
jadwalmatakuliahController.index = async(req,res) => {
    res.json({
        message : "Hello jadwalmatakuliahController"
    })
}
jadwalmatakuliahController.create = async(req,res) => {
    const {id_matkul, hari, jam} = req.body
    try {
        const getMatkul = await MataKuliah.findOne({
            where : {
                id : id_matkul
            }
        });
        if(getMatkul === null){
            throw new Error("Data Tidak Ditemukan !");
        }else {
            const createJadwalMatkul = await JadwalMataKuliah.create({
                id_matkul : getMatkul.id,
                hari : hari,
                jam : jam
            })
            return res.status(201).json({
                message: "Data Berhasil Ditambahkan !"
            })
        }
    } catch (error) {
        return res.status(500).json({
            message: error
        })
    }

}

jadwalmatakuliahController.getAll = async(req,res) => {
        const getJadwalMatkul = await MataKuliah.findAll({
            include: [
                {
                    model : JadwalMataKuliah
                }
            ]
        });
        res.json({
            data : getJadwalMatkul
        })
    }

jadwalmatakuliahController.getById = async(req,res) => {
    const{id}= req.params
    const getJadwalMatkul = await MataKuliah.findOne({
        include: [
            {
                model : JadwalMataKuliah
            }
        ],
        where : {
            id : id
        }});
    res.json({
        data : getJadwalMatkul
    })
}

jadwalmatakuliahController.update = async(req,res) => {
    const {id_matkul,hari,jam} = req.body
    const {id} = req.params
    try {
        const getMatkul = await MataKuliah.findOne({
            where : {
                id : id
            }
        })
        if(getMatkul === null){
            throw Error("Data Tidak Ditemukan !")
        }else {
            const updateJadwalMat = await JadwalMataKuliah.update({
                id_matkul : getMatkul.id,
                hari : hari,
                jam : jam
            },{
                where : {
                    id : id
                }
            })
        return res.status(200).json({
            message: "Data Berhasil Diubah !"
            })
        }
    } catch (error) {
        return res.status(500).json({
            message: error
        })
    }

}

jadwalmatakuliahController.delete = async(req,res) => {
    const{id}= req.params
    try {
        const deleteJadwalMat = await JadwalMataKuliah.destroy({
            where : {
                id : id
            }
        })
        return res.status(200).json({
            message : "Data Berhasil Dihapus !"
        })
    } catch (error) {
        return res.status(500).json({
            message: error
        })
    }
}

module.exports = jadwalmatakuliahController

