const mongoose = require("mongoose")

const generalUserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: email,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    deviceIP: {
        type: String,
    },
    primiumUser: {
        type: Boolean, 
        default: false
    }
})

module.exports = mongoose.model("generaluser", generalUserSchema)