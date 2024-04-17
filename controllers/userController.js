const User = require("../routes/users-routes")

const getUsers = (req, res, next) => {
    // let 
}

const login = (req, res, next) => {

}

const signup = async (req, res, next) => {
    const { name, email, password } = req.body

    let existingUser;

    try {
        const existingUser = User.findOne({ email: email })
    } catch (error) {
        console.log(error)
    }

    if (existingUser) {
        console.log("user already exists");
        return;
    }

    const createdUser = new User({
        name: name,
        email: email,
        password: password
    })

    try {
        var savedUser = await createdUser.save()
        console.log(savedUser);
    } catch (err) {
        console.log(err);
    }


}

const userController = {
    getUsers: getUsers,
    login: login,
    signup: signup,
}

module.exports = userController