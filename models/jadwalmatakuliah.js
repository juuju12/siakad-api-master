'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class JadwalMataKuliah extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      JadwalMataKuliah.belongsTo(models.MataKuliah,{through : 'JadwalMataKuliah',foreignKey : 'id_matkul'});
    }//huhu
  }
  JadwalMataKuliah.init({
    id_matkul:{
      type : DataTypes.INTEGER,
      references : {
        model : 'MataKuliahs',
        key: 'id'
      }
    },
    hari: DataTypes.STRING,
    jam: DataTypes.TIME
  }, {
    sequelize,
    modelName: 'JadwalMataKuliah',
  });
  return JadwalMataKuliah;
};