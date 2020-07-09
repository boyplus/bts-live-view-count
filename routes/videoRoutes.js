const mongoose = require('mongoose');
const axios = require('../services/axios');

const keys = require('../config/keys');
const parseToNumber = require('../utils/parseDetailToNumber');
const setDisplayTitle = require('../utils/setDisplayTitle');
const VideoList = mongoose.model('videoList');
const VideoDetail = mongoose.model('videoDetail');
const Config = mongoose.model('configs');

const updateDB = require('../utils/updateDB');

module.exports = (app) => {
    app.get('/api/videos', async (req, res) => {
        try {
            const videoList = await VideoList.find({});
            const videos = await VideoDetail.find({});
            let response = {
                videos: videos[0].videos,
                lastUpdated: videos[0].lastUpdated,
            };
            parseToNumber(response);
            setDisplayTitle(response, videoList);
            res.send(response);
        } catch (err) {
            res.status(500).send(err);
        }
    });

    app.get('/api/videoList', async (req, res) => {
        const { name } = req.body;
        const videos = await VideoList.find({ name });
        res.send(videos);
    });

    app.post('/api/video', async (req, res) => {
        const { youtubeId, displayTitle } = req.body;
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
                res.status(400).send({
                    msg: 'This video already in database!',
                });
            } else {
                const newVideo = await new VideoList({
                    youtubeId,
                    displayTitle,
                }).save();
                await updateDB();
                res.send({ msg: 'Add new video and update database complete' });
            }
        }
    });

    app.patch('/api/video', async (req, res) => {
        const { youtubeId, displayTitle } = req.body;
        await VideoList.updateOne(
            { youtubeId },
            {
                $set: {
                    displayTitle: displayTitle,
                },
            }
        );
        res.send({ msg: 'Update video title complete!' });
    });

    app.delete('/api/video', async (req, res) => {
        const { youtubeId } = req.body;
        try {
            await VideoList.deleteOne({ youtubeId });
            await updateDB();
            res.send({ msg: 'Delete video complete' });
        } catch (err) {
            res.status(500).send({ msg: 'Fail to delete video' });
        }
    });

    app.patch('/api/updateDatabase', async (req, res) => {
        try {
            await updateDB();
            res.send({ msg: 'Update database complet.' });
        } catch (err) {
            res.status(500).send({ msg: 'Fail to update database' });
        }
    });

    app.get('/api/config', async (req, res) => {
        const config = await Config.find({ type: 'BTS' });
        const { times, allow } = config[0];
        res.send({ times, allow });
    });
};
