require("dotenv/config")

const server = require("./server")
const database = require("./src/configs/db")
const port = 8000

async function init() {
    try {
        await database.authenticate()
        await database.sync({alter : true}) 
        
        server.listen(port, () => {
            console.log(`Conection to Database Success`)
            console.log(`Service running on port ${port}`)
        })
    } catch (error) {
        console.log(`Connection to Database is Successful`)
        console.log(error.message)
        process.exit(1)
        
    }
}

init()