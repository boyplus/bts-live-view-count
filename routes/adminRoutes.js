const mongoose = require('mongoose');

const User = mongoose.model('users');
const Config = mongoose.model('configs');

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

    app.patch('/api/config/times', async (req, res) => {
        const { times } = req.body;
        const existingConfig = await Config.find({});
        if (existingConfig.length > 0) {
            const updatedConfig = await Config.updateOne(
                { type: 'BTS' },
                {
                    $set: {
                        times: times,
                    },
                }
            );
            res.send({ msg: 'Update the times config complete' });
        } else {
            const newConfig = new Config({ times: times }).save();
            res.send({ msg: 'Create the times config complete' });
        }
    });

    // app.patch('/api/config/allow', async (req, res) => {
    //     const { allow } = req.body;
    //     const newConfig = await Config.updateOne(
    //         { type: 'BTS' },
    //         {
    //             $set: {
    //                 allow: allow,
    //             },
    //         }
    //     );
    //     res.send({ msg: 'Update allow config complete' });
    // });
};
