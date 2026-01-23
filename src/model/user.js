const mongoose = require("mongoose")
const validator = require("validator")
const userSchema = mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        minlength: 4,

    },
    lastName: {
        type: String,
        required: true,
        maxlength: 20
    },
    emailId: {
        type: String,
        required: true,
        trim: true,
        unique: true,
        lowercase: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error("Invalid email addres")
            }
        }
    },
    password: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true,
        min: 18
    },
    gender: {
        type: String,
        required: true,
        validate(value) {
            if (!["female", "male"].includes(value)) {
                throw new Error("Invalid gender")
            }
        }
    },
    skill: {
        type: [String],
        required: true
    }
}, { timestamps: true })
const User = mongoose.model("User", userSchema)
module.exports = User