const kategori = {}
const model = require("../models/kategori")
const response = require("../helpers/response")

kategori.getAll = async (req, res) => {
    try {
        const result = await model.getAll()
        return response(res, 200, result)
    } catch (error) {
        return response(res, 500, error, true)
    }
}

kategori.addData = async (req, res) => {
    try {
        const object = await (req.body)
        const data = {
            nama_kategori : object.nama_kategori,
        }
        const result = await model.addData(data)
        return response(res, 201, result, true)
    } catch (error) {
        return response(res, 500, error)
    }
}

kategori.updateData = async (req, res) => {
    try {
        const object = await (req.body)
        const data = {
            id: object.id,
            nama_kategori : object.nama_kategori,
        }
        const result = await model.updateData(data)
        return response(res, 201, result)
    } catch (error) {
        return response(res, 500, error, true)
    }
}

kategori.removeData = async (req, res) => {
    try {
        const result = await model.removeData(req.params.id)
        return response(res, 200, result)
    } catch (error) {
        // Logger.error(error)
        console.log(error)
        return response(res, 500, error, true)
    }
}

module.exports = kategori