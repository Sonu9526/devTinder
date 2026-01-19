const exp = require("express")
const { connectDb } = require("./config/database.js")
const User = require("./model/user.js")
const { default: mongoose } = require("mongoose")
const app = exp()
app.use(exp.json())
app.post("/signup", async (req, res) => {

    const user = new User(req.body)
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


