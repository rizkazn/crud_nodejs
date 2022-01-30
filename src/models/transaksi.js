const orm = require('../configs/db')
const {DataTypes, where, Op, Sequelize} = require("sequelize")
const produk = require('./produk')

class Transaksi {   
    constructor() {
        this.table = orm.define("transaksis", {
            id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
            },
            produk_id: {
                type : DataTypes.INTEGER,
                allowNull : false,
                onDelete: 'CASCADE',
                references: {
                    model: 'produks',
                    key: 'id',
                },
            },
            nama_kategori: {
                type: DataTypes.STRING(100),
                allowNull: false,
            },
        })
        this.table.belongsTo(produk.table, {
            foreignKey: 'produk_id',
            as: 'produk',
            onDelete: 'CASCADE',
        })
    }
    
    getAll() {
        return new Promise((resolve, reject) => {
            this.table.findAll({
                order: [["id", "DESC"]],
                include: [
                    {
                        model: produk.table,
                        as: 'produk',
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
            this.table.update(data, {
                where: {
                    id: data.id,
                }
            })
            .then((res) => {
                resolve(res)
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
                    id,
                }
            })
            .then((res) => {
                resolve(res)
            })
            .catch((err) => {
                reject(err)
            })
        })
    }
}

module.exports = new Transaksi()