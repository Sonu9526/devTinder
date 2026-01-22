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
app.patch("/user/:userId", async (req, res) => {
    try {
        const userId = req.params.userId
        const data = req.body

        const ALLOWED_UPDATES = ["userId", "age", "about", "gender", "skill"]

        // 1️⃣ Check allowed fields FIRST
        const isUpdateAllowed = Object.keys(data).every(key =>
            ALLOWED_UPDATES.includes(key)
        )

        if (!isUpdateAllowed) {
            return res.status(400).send("Update not allowed")
        }

        // 2️⃣ Custom validation BEFORE DB update
        if (data.skill && data.skill.length > 10) {
            return res.status(400).send("Skills cannot be more than 10")
        }

        // 3️⃣ Update with validation enabled
        const updatedUser = await User.findByIdAndUpdate(
            userId,
            data,
            {
                new: true,
                runValidators: true
            }
        )

        if (!updatedUser) {
            return res.status(404).send("User not found")
        }

        res.send("User data updated successfully")

    } catch (err) {
        res.status(400).send(err.message)
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


