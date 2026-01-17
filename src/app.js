const exp = require("express")
const { adminAuth, userAuth } = require("./middleware/auth.js")
const app = exp()

app.use("/admin/getAllData", adminAuth, (req, res) => {
    res.send("Get all data")
})
app.use("/user/login", userAuth, (req, res) => {
    res.send("Getting users data")
})




app.listen(1111, () => {
    console.log("server is on.......");
})