const orm = require('../configs/db')
const {DataTypes, where, Op, Sequelize} = require("sequelize")
const kategori = require('./kategori')

class Produk {   
    constructor() {
        this.table = orm.define("produks", {
            id: {
                type : DataTypes.INTEGER,
                allowNull : false,
                autoIncrement: true,
                primaryKey: true,
            },
            nama_produk: {
                type : DataTypes.STRING(100),
                allowNull : false
            },
            kategori_id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                onDelete: 'CASCADE',
                references: {
                    model: 'kategoris',
                    key: 'id',
                },
            },
            stock: {
                type : DataTypes.INTEGER,
                allowNull : false
            },
            harga: {
                type : DataTypes.INTEGER,
                allowNull : false
            },
            photo: {
                type : DataTypes.STRING(255),
                allowNull : false
            },
        },{
            timestamps: false
        })
        this.table.belongsTo(kategori.table, {
            foreignKey: 'kategori_id',
            as: 'kategori',
            onDelete: 'CASCADE',
        })
    }
    
    getAll() {
        return new Promise((resolve, reject) => {
            this.table.findAll({
                order: [["id", "DESC"]],
                include: [
                    {
                        model: kategori.table,
                        as: 'kategori'
                    },
                ],
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
                nama_produk: data.nama_produk,
                kategori_id : data.kategori_id,
                stock : data.stock,
                harga: data.harga,
                photo: data.photo,
            }, {
                where: {
                    id : data.id,
                }
            })
            .then((res) => {
                resolve("Update Data Product Success")
            })
            .catch((err) => {
                reject(err)
            })
        })
    }

    removeData(id) {
        return new Promise((resolve,reject) => {
            this.table.destroy({
                where: {
                    id : id,
                }
            })
            .then((res) => {
                resolve("Delete Data Product Success")
            })
            .catch((err) => {
                reject(err)
            })
        })
    }
}

module.exports = new Produk()