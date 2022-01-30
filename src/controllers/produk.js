const produk = {}
const model = require("../models/produk")
const response = require("../helpers/response")
const uploads = require("../helpers/uploadCloud")

produk.getAll = async (req, res) => {
    try {
        const result = await model.getAll()
        return response(res, 200, result)
    } catch (error) {
        return response(res, 500, error, true)
    }
}

produk.addData = async (req, res) => {
    try {
        let defaultImage =
        "https://res.cloudinary.com/rizkazn/image/upload/v1635255268/user_meodkb_nxaift.png"
        let urlImage = ""
        if (req.file !== undefined) {
            urlImage = await uploads(req.file.path)
        }
        const object = await (req.body)
        const data = {
            nama_produk: object.nama_produk,
            kategori_id : object.kategori_id,
            stock : object.stock,
            harga: object.harga,
            photo: urlImage || defaultImage,
        }
        const result = await model.addData(data)
        return response(res, 201, result)
    } catch (error) {
        console.log(error)
        return response(res, 500, error, true)
    }
}

produk.updateData = async (req, res) => {
    try {
        let defaultImage =
        "https://res.cloudinary.com/rizkazn/image/upload/v1635255268/user_meodkb_nxaift.png"
        if (req.file !== undefined) {
            urlImage = await uploads(req.file.path)
        }
        const object = await (req.body)
        const data = {
            id: object.id,
            nama_produk: object.nama_produk,
            kategori_id : object.kategori_id,
            stock : object.stock,
            harga: object.harga,
            photo: urlImage || defaultImage,
        }
        const result = await model.updateData(data)
        return response(res, 200, result)
    } catch (error) {
        console.log(error)
        return response(res, 500, error, true)
    }
}

produk.removeData = async (req, res) => {
    try {
        const result = await model.removeData(req.params.id)
        return response(res, 200, result)
    } catch (error) {
        Logger.error(error)
        return response(res, 500, error, true)
    }
}

module.exports = produk