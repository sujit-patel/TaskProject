import User from "../model/user.js";

//Register new user
export const registerUser = async (req, res) => {
    try {
        const { email, fullName, password } = req.body;

        const userExists = await User.findOne({ email });
        if (userExists) {
            return res.status(400).json({ message: "User already exists" });
        }

        const user = await User.create({ email, fullName, password });

        if (user) {
            res.status(201).json({
                _id: user.id,
                email: user.email,
                fullName: user.fullName,
                // token: generateToken(user._id),
            });
        } else {
            res.status(400).json({ message: "Invalid user data" });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
