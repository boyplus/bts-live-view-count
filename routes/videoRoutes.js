const mongoose = require('mongoose');

const VideoList = mongoose.model('videos');

module.exports = (app) => {
    app.get('/api/video', async (req, res) => {
        const { name } = req.body;
        const videos = await VideoList.find({ name });
        res.send(videos);
    });
};
