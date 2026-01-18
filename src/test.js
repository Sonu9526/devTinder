const exp = require("express")
const app = exp();
app.get('/users/:userId/books/:bookId', (req, res) => {
    res.send(req.params)
})
app.listen(1111)

"mongodb+srv://SonuSNair:9px3e9trTnoDiZnb@namastenodejs.puplz8c.mongodb.net/"