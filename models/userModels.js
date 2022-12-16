const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    fullname: {
        type: String,
        required: [true, "Please Enter Your Name"]
    },
    office: {
        type: String,
        required: [true, "Please Select an Office"]
    },
    email: {
        type: String,
        required: [true, "Please Enter Your email"],
        unique: true,
        trim: true,
        match: [
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, "Please enter a valid email"
        ]
    },
    username: {
        type: String,
        required: [true, "Please type in a password"],
    },
    password: {
        type: String,
        required: [true, "Please type in a password"],
        minLength: [4, "Password must be more than four characters"],
        maxLength: [15, "Password must not be more than 15 Characters"]
    },
    // cPassword: {
    //     type: String,
    //     required: [true, "Please type in a password"],
    //     minLength: [4, "Password must be more than four characters"],
    //     maxLength: [15, "Password must not be more than 15 Characters"],
    //     match: [userSchema.password, "Password must match"]
    // },
    // photo: {
    //     type: String,
    //     required: [true, "Please add a photo"],
    //     default: 
    // },
},
{timestamps: true}
)

const User = mongoose.model("User", userSchema);
module.exports = User