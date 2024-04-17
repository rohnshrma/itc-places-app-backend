import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
    name: { type: String, minLength: 3, required: true },
    email: { type: String, minLength: 8, required: true, unique: true },
    password: { type: String, minLength: 8, required: true }
})

const User = new mongoose.model("user", userSchema)
export default User;