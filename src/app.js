const exp = require("express")
const { connectDb } = require("./config/database.js")
const User = require("./model/user.js")
const { default: mongoose } = require("mongoose")
const app = exp()
app.use(exp.json())

// save the data to the DB
app.post("/signup", async (req, res) => {
    const user = new User(req.body)
    try {
        await user.save()
        res.send("Data save Successfully")
    } catch (err) {
        res.status(402).send("there is an error in saving data" + err)
    }
})

// display one user from the DB
app.get("/user", async (req, res) => {
    const userEmail = req.body.emailId
    const user = await User.findOne({ emailId: userEmail })
    res.send(user)
})
// display all the user from the DB
app.get("/feed", async (req, res) => {
    try {
        const allUser = await User.find({})
        res.send(allUser)
    } catch (err) {
        res.status(404).send("Somethine went wrong")
    }
})

// delete user from DB
app.delete("/user", async (req, res) => {
    const userId = req.body.userId
    try {
        const deletedUser = await User.findByIdAndDelete(userId)
        res.send("deleted Succesfuly")
    } catch (err) {
        res.status(404).send("Somthing went wrong")
    }
})

// update the user from DB
app.patch("/user", async (req, res) => {
    const userId = req.body.userId

    const data = req.body
    try {
        await User.findByIdAndUpdate(userId, data)
        res.send("User data updated Sucessfully")
        runValidators: true
    } catch (err) {
        res.status(404).send("Somthing went wrong")
    }
})

connectDb().then(() => {
    console.log("Connect Db Success");
    app.listen(1111, () => {
        console.log("server is on.......");
    })

}).catch((err) => {
    console.log(err + "dfdfd");
})


