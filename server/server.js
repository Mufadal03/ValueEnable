const express = require("express")
const { connection } = require("./config/db")
const { RegisterationController } = require("./routes/register.routes")
const app = express() 
const cors = require("cors")
app.use(express.json())  
app.use(cors()) 


app.get("/", (req,res) => {
    res.send("homepage")
})
app.use("/user",RegisterationController)
app.listen(4000, async () => {
    try {
        await connection
        console.log("Running on the port")
    } catch (e) {
        console.log("Error while trying to connect",e)
    }
}) 