const {Mahasiswa,Dosen,MahasiswaBimbingan} = require("../models")
const mahasiswabimbinganController = {}

/*
    this is auto generate example, you can continue 

*/
mahasiswabimbinganController.index = async(req,res) => {
    res.json({
        message : "Hello mahasiswabimbinganController"
    })
}
mahasiswabimbinganController.create = async(req,res) =>{
    const {id_mahasiswa, id_dosen} = req.body
    try {
        const getMahasiswa = await Mahasiswa.findOne({
            where : {
                id : id_mahasiswa
            }
        })
        const getDosen= await Dosen.findOne({
            where : {
                id : id_dosen
            }
        })
        if(getMahasiswa === null || getDosen === null){
            throw Error("Data Tidak Ditemukan !")
        }else {
            const creatMhsBimbingan = await MahasiswaBimbingan.create({
                id_mahasiswa : getMahasiswa.id,
                id_dosen : getDosen.id
            })
            return res.status(201).json({
                message: "Data Berhasil Ditambahkan !"
            })
        }
    } catch (error) {
        return res.status(404).json({
            message : error.message
        })
    }
    
}
mahasiswabimbinganController.getAll = async (req,res)=> {
    const getMhsBimbingan = await Mahasiswa.findAll({
        include : [
            {
                model : Dosen
            }
        ]
    });
    res.json({
        data : getMhsBimbingan
    })
}

mahasiswabimbinganController.getById = async (req,res)=> {
    const {id} = req.params
    const getMhsBimbingan = await Mahasiswa.findOne({
        include : [
            {
                model : Dosen,
            }
        ],
        where : {
            id : id
        }});
    res.json({
        data : getMhsBimbingan
    })
}
mahasiswabimbinganController.update = async(req, res) =>{
    const {id_mahasiswa, id_dosen} = req.body 
    const {id} = req.params
    try {
        const getMahasiswa = await Mahasiswa.findOne({
            where : {
                id : id_mahasiswa
            }
        })
        const getDosen= await Dosen.findOne({
            where : {
                id : id_dosen
            }
        })
        if(getMahasiswa === null || getDosen === null){
            throw Error("Data Tidak Ditemukan !")
        }else {
            const creatMhsBimbingan = await MahasiswaBimbingan.update({
                id_mahasiswa : getMahasiswa.id,
                id_dosen : getDosen.id
            },{
                where : {
                    id : id
                }
            })
            return res.status(201).json({
                message: "Data Berhasil Diubah !"
            })
        }
    } catch (error) {
        return res.status(404).json({
            message : error.message
        })
    }
    
}
mahasiswabimbinganController.delete = async(req,res) => {
    const{id}= req.params
    try {
        const deleteMhsBimbingan = await MahasiswaBimbingan.destroy({
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

module.exports = mahasiswabimbinganController

