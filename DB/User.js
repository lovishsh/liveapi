import mongoose from "mongoose";
import bcrypt from "bcrypt";
const Schema = mongoose.Schema;
const UserSchema = new Schema({
    name: { type: String, trim: true },
    email: { type: String, trim: true, index: true },
    password: { type: String, trim: true }
})

UserSchema.pre("save", async function (next) {
    if (!this.isModified("password")) return next();
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
})
const User = new mongoose.model("User", UserSchema, "User");
export default User;
