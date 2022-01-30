const transaksi = {}
const model = require("../models/transaksi")
const response = require("../helpers/response")

transaksi.getAll = async (req, res) => {
    try {
        const result = await model.getAll()
        return response(res, 200, result)
    } catch (error) {
        return response(res, 500, error, true)
    }
}

transaksi.addData = async (req, res) => {
    try {
        const object = await (req.body)
        const data = {
            produk_id : object.produk_id,
            nama_kategori : object.nama_kategori
        }
        const result = await model.addData(data)
        return response(res, 201, result)
    } catch (error) {
        return response(res, 500, error, true)
    }
}

transaksi.updateData = async (req, res) => {
    try {
        const object = await (req.body)
        const data = {
            produk_id : object.produk_id,
            nama_kategori : object.nama_kategori
        }
        const result = await model.updateData(data)
        return response(res, 201, result)
    } catch (error) {
        return response(res, 500, error, true)
    }
}

transaksi.removeData = async (req, res) => {
    try {
        const result = await model.removeDataBags(req.params.produk_id)
        return response(res, 200, result)
    } catch (error) {
        Logger.error(error)
        return response(res, 500, error, true)
    }
}

module.exports = transaksi