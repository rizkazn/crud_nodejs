const express = require("express")
const router = express.Router()
const produk = require("./routes/produk")
const kategori = require("./routes/kategori")
const transaksi = require("./routes/transaksi")
const { cloudConfig } = require("./configs/cloudinary")

router.use("*", cloudConfig)
router.use("/produk", produk)
router.use("/kategori", kategori)
router.use("/transaksi", transaksi)
router.use("*", (req, res) => {
    res.status(404).json("Endpoint Wrong!!")
})

module.exports = router