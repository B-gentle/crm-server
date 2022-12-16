const asyncHandler = require('express-async-handler');
const User = require('../models/userModels');

const registerUser = asyncHandler(async (req, res) => {
    const {
        fullname,
        office,
        username,
        email,
        password
    } = req.body;

    if (!fullname || !email || !username || !password) {
        res.status(400)
        throw new Error("Please fill in all required fields")
    }

    if (password.length < 6) {
        res.status(400)
        throw new Error("Password must be up to 6 Characters")
    }

    if (password.length > 15) {
        res.status(400)
        throw new Error("Password must be less than Characters")
    }

    // Check for existing users
    const userExist = await User.findOne({
        email
    })

    if (userExist) {
        res.status(400)
        throw new Error("email has already been used")
    }
    // create new user
    const user = await User.create({
        fullname,
        office,
        email,
        username,
        password
    })

    if (user) {
        const {
            _id,
            fullname,
            office,
            username,
            email,
            password
        } = user
        res.status(201).json({
            _id,
            fullname,
            office,
            username,
            email,
            password
        })

    } else {
        res.status(400)
        throw new Error("invalid user data")
    }

});

const grabUsers = asyncHandler( async(req, res)=>{
await User.find().then(result => res.send(result)).catch(err=>console.log(err))
}
)

module.exports = {
    registerUser, grabUsers
}