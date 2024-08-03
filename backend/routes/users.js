const router = require('express').Router();
const bcrypt = require('bcryptjs');
const User = require('../models/User');


// Đăng ký
router.post('/register', async (req, res) => {
    const { username, email, password } = req.body;
    console.log('Received data:', req.body);

    if (!username || !email || !password) {
        console.log('Missing required fields');
        return res.status(400).json({ message: 'Missing required fields' });
    }

    try {
        const userExists = await User.findOne({ email });
        if (userExists) {
            console.log('Email đã được sử dụng');
            return res.status(400).json({ message: 'Email đã được sử dụng' });
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = new User({
            username,
            email,
            password: hashedPassword,
        });

        await newUser.save();
        console.log('User registered successfully');
        res.status(201).json({ message: 'User registered successfully!' });
    } catch (err) {
        console.error('Error saving user:', err);
        res.status(400).json({ message: 'Failed to register user', error: err.message });
    }


});
// Lấy danh sách admin
router.get('/admins', async (req, res) => {
try {
    const admins = await User.find({ role: 'admin' }).limit(3); // Lấy 3 admin
    res.json(admins);
} catch (error) {
    res.status(500).json({ error: 'Server error' });
}
});

module.exports = router;