const orm = require('../configs/db')
const {DataTypes, where, Op, Sequelize} = require("sequelize")

class Kategori {   
    constructor() {
        this.table = orm.define("kategoris", {
            id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
            },
            nama_kategori: {
                type: DataTypes.STRING(100),
                allowNull: false,
            },
        },{
            timestamps: false
        })
    }
    
    getAll() {
        return new Promise((resolve, reject) => {
            this.table.findAll({
                order: [["id", "DESC"]],
            })
            .then((res) => {
                resolve(res)
            })
            .catch((err) => {
                reject(err)
            })
        })
    }
    addData(data) {
        return new Promise((resolve, reject) => {
            this.table.create(data)
            .then((res) => {
                resolve(res)
            })
            .catch((err) => {
                reject(err)
            })
        })
    }
    updateData(data) {
        return new Promise((resolve, reject) => {
            this.table.update({
                nama_kategori : data.nama_kategori,
            }, {
                where: {
                    id: data.id,
                }
            })
            .then((res) => {
                resolve("Update Data Category Success")
            })
            .catch((err) => {
                reject(err)
            })
        })
    }

    removeDataCategory(id) {
        return new Promise((resolve,reject) => {
            this.table.destroy({
                where: {
                    id :id,
                }
            })
            .then((res) => {
                resolve("Delete Data Category Success")
            })
            .catch((err) => {
                reject(err)
            })
        })
    }
}

module.exports = new Kategori()