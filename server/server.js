const express = require("express")
const { connection } = require("./config/db")
const app = express()


app.get("/", (req,res) => {
    res.send("homepage")
})
app.listen(4000, async () => {
    try {
        await connection
        console.log("Running on the port")
    } catch (e) {
        console.log("Error while trying to connect",e)
    }
}) 