const mongoose = require('mongoose');
const axios = require('../services/axios');

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
        let videoDetail = null;
        try {
            videoDetail = await axios.get('/videos', {
                params: {
                    id: youtubeId,
                },
            });
        } catch (err) {
            console.log('we cannot use first key, try to use second key.');
            try {
                videoDetail = await axios.get('/videos', {
                    params: {
                        id: youtubeId,
                        key: keys.apiKey2,
                    },
                });
            } catch (err) {
                console.log('Both key are not working');
                res.status(500).send({
                    msg: 'Google api key are not working!',
                });
            }
        }

        if (videoDetail === null || videoDetail.data.items.length == 0) {
            res.status(400).send({ msg: 'This video is unavailable' });
        } else {
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
