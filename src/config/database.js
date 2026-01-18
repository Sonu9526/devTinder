const mongoose = require("mongoose")
const connectDb = async () => {
    await mongoose.connect("mongodb+srv://SonuSNair:9px3e9trTnoDiZnb@namastenodejs.puplz8c.mongodb.net/DevTinder")
}
module.exports = { connectDb }