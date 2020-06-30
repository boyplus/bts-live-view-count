const mongoose = require('mongoose');
const axios = require('axios');

const keys = require('../config/keys');
const VideoList = mongoose.model('videoList');

module.exports = (app) => {
    app.get('/api/videos', async (req, res) => {
        const { name } = req.body;
        const videos = await VideoList.find({ name });
        res.send(videos);
    });

    app.post('/api/video', async (req, res) => {
        const { youtubeId } = req.body;
        const videoDetail = await axios.get(
            'https://www.googleapis.com/youtube/v3/videos/',
            {
                params: {
                    part: 'snippet,statistics',
                    key: keys.apiKey,
                    id: youtubeId,
                },
            }
        );
        if (videoDetail.data.items.length == 0) {
            res.send({ msg: 'This video is unavailable' });
        } else {
            console.log(videoDetail.data);
            const existingVideo = await VideoList.findOne({ youtubeId });
            if (existingVideo) {
                res.send({ msg: 'This video already in database!' });
            } else {
                const newVideo = await new VideoList({
                    youtubeId,
                }).save();
                res.send(newVideo);
            }
        }
    });
};
