const validator = require("validator")
const validateSignUpdata = (req) => {
    const { firstName, lastName, emailId, password } = req.body

    if (!firstName || !lastName) {
        throw new Error("Name is not valid")
    } else if (!validator.isEmail(emailId)) {
        throw new Error("Invalid email id")
    } else if (!validator.isStrongPassword) {
        throw new Error("Enter Strong password")
    }
}

module.exports = { validateSignUpdata }