const exp = require("express")
const { connectDb } = require("./config/database.js")
const User = require("./model/user.js")
const { default: mongoose } = require("mongoose")
const app = exp()
app.post("/signup", async (req, res) => {

    const userObj = {
        firstName: "Hari",
        lastName: "V Nair",
        emailId: "harivnair46@gmail.com",
        age: 23,
        pass: "hari123"
    }
    const user = new User(userObj)
    try {
        await user.save()
        res.send("Data save Successfully")
    } catch (err) {
        res.status(402).send("there is an error in saving data" + err)
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




