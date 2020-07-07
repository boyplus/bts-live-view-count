const passport = require('passport');

module.exports = (app) => {
    app.get('/api/test', (req, res) => {
        res.send({ msg: 'success' });
    });

    app.get(
        '/auth/google',
        passport.authenticate('google', {
            scope: ['profile', 'email'],
        })
    );

    app.get(
        '/auth/google/callback',
        passport.authenticate('google'),
        (req, res) => {
            res.redirect('/admin/videos');
        }
    );

    app.get('/api/logout', (req, res) => {
        req.logout();
        res.redirect('/');
    });

    app.get('/api/current_user', (req, res) => {
        console.log(req);
        res.send(req.user);
    });
};
