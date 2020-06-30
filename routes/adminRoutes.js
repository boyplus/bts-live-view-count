const mongoose = require('mongoose');

const User = mongoose.model('users');

module.exports = (app) => {
    app.get('/api/admin', async (req, res) => {
        const admins = await User.find({ role: 'admin' });
        res.send(admins);
    });

    app.patch('/api/admin', async (req, res) => {
        const { googleId } = req.body;
        const user = await User.updateOne(
            { googleId },
            {
                $set: {
                    role: 'admin',
                },
            }
        );
        res.send(user);
    });

    app.get('/api/user', async (req, res) => {
        const users = await User.find({ role: 'user' });
        res.send(users);
    });
};
