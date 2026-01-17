import User from "../../DB/User.js"
import bcrypt from "bcrypt";
async function register(req, res) {
    const { email, name, password } = req.body;
    try {
        const query = {
            email: { $regex: email, $options: "i" }
        }
        const user = await User.findOne(query);
        if (user) {
            return res.status(400).json({
                success: false,
                msg: "user already exists",
                data: null
            })
        }
        await User.create({
            email,
            name,
            password
        })
        return res.status(200).json({ success: true, msg: "registered successfully", data: null });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ success: false, msg: error, data: null })
    }

}
async function login(req, res) {
    const { email, password } = req.body;
    try {
        const query = {
            email: { $regex: email, $options: "i" }
        }
        const user = await User.findOne(query);
        if (!user) {
            return res.status(400).json({
                success: false,
                msg: "user not found",
                data: null
            })
        }
        const isVerify = await bcrypt.compare(password,user.password);
        if (!isVerify) {
            return res.status(400).json({
                success: false,
                msg: "invalid password",
                data: null
            })
        }
        return res.status(200).json({ success: true, msg: "login successfully", data: null });
    } catch (error) {
        return res.status(500).json({ success: false, msg: error.msg, data: null })
    }
}
async function userProfile(req, res) {
    const { user_id } = req.query;
    try {

        const user = await User.findById(user_id);
        if (!user) {
            return res.status(400).json({
                success: false,
                msg: "user not found",
                data: null
            })
        }

        return res.status(200).json({ success: true, msg: "data fetched successfully", data: user,code:1 });
    } catch (error) {
        return res.status(500).json({ success: false, msg: error.msg, data: null })
    }
}

export default { register, login, userProfile }