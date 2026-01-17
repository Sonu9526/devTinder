const adminAuth = (req, res, next) => {
    const token = "abc"
    const isadmin = token === "abc"
    if (!isadmin) {
        res.status(401).send("You are not admin")
    } else {
        next()
    }
}

const userAuth = (req, res, next) => {
    const token = "abc"
    const isUser = token === "abc"
    if (!isUser) {
        res.status(401).send("You are not user")
    } else {
        next()
    }
}
module.exports = {
    adminAuth,
    userAuth
}
