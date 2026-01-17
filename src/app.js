const exp = require("express")
const app = exp()

app.use("/", (req, res) => {
    res.send("Hello from home page")
})
app.use("/user", (req, res) => {
    res.send("Hello from user page")
})

app.listen(1111, () => {
    console.log("server is on.......");
})