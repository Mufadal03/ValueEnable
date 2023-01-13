const { Router } = require("express")
const bcrypt = require("bcrypt")
const { UserModel } = require("../models/user.model")
const jwt = require("jsonwebtoken")
require("dotenv").config()
RegisterationController = Router()

RegisterationController.post("/login", async(req, res) => {
    const { email, password } = req.body 
    let hashed = null
    const user = await UserModel.findOne({ email })
    if (user) hashed = user.password
    else return res.send("User not found")
    bcrypt.compare(password, hashed, (err, result) => {
        if (result) {
            const token = jwt.sign({ userId: user._id, userEmail: user.email }, process.env.SECRET_KEY)
            res.send({login:"Success",token})
        }
        else {
            res.send("Login Failed")
        }
    })
})

RegisterationController.post("/signup", (req, res) => {
    const { email, name, password } = req.body
    bcrypt.hash(password, 5, async (err, hash) => {
            const user = UserModel({ email, name, password: hash })
            await user.save()
            res.send("Signup success")
    })
    
})
module.exports={RegisterationController}