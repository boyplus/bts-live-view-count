const mongoose = require('mongoose');
const chalk = require('chalk');
const moment = require('moment');

const axios = require('../services/axios');
const keys = require('../config/keys');
const VideoList = mongoose.model('videoList');
const VideoDetail = mongoose.model('videoDetail');
const Config = mongoose.model('configs');

async function updateDb() {
    console.log('start to fetch data from database');
    const videoList = await VideoList.find({});
    let videoIds = '';
    for (let i = 0; i < videoList.length; i++) {
        if (i !== 0) {
            videoIds += ',';
        }
        videoIds += videoList[i].youtubeId;
    }

    let temp = await VideoDetail.find({});
    let videoDetail = [];
    if (temp.length > 0) {
        videoDetail = temp[0].videos;
    }

    let res = null;
    try {
        res = await axios.get('/videos', {
            params: {
                id: videoIds,
            },
        });
    } catch (err) {
        console.log('we cannot use first key, try to use second key.');
        try {
            res = await axios.get('/videos', {
                params: {
                    key: keys.apiKey2,
                    id: videoIds,
                },
            });
        } catch (err) {
            console.log('Both key are not working');
            return;
        }
    }

    let fetchVideos = res.data.items;

    let videos = [];
    for (let i = 0; i < fetchVideos.length; i++) {
        for (let j = 0; j < videoDetail.length; j++) {
            if (fetchVideos[i].id === videoDetail[j].youtubeId) {
                fetchVideos[i].kind = '-';
                break;
            }
        }
    }

    for (let i = 0; i < fetchVideos.length; i++) {
        if (fetchVideos[i].kind !== '-') {
            const video = {
                youtubeId: fetchVideos[i].id,
                title: fetchVideos[i].snippet.title,
                pic: fetchVideos[i].snippet.thumbnails.standard,
                publishedAt: fetchVideos[i].snippet.publishedAt,
                oldView: fetchVideos[i].statistics.viewCount,
                oldLike: fetchVideos[i].statistics.likeCount,
                oldDislike: fetchVideos[i].statistics.dislikeCount,

                newView: fetchVideos[i].statistics.viewCount,
                newLike: fetchVideos[i].statistics.likeCount,
                newDislike: fetchVideos[i].statistics.dislikeCount,
            };
            videos.push(video);
        } else {
            for (let j = 0; j < videoDetail.length; j++) {
                if (fetchVideos[i].id === videoDetail[j].youtubeId) {
                    const video = {
                        youtubeId: fetchVideos[i].id,
                        title: fetchVideos[i].snippet.title,
                        pic: fetchVideos[i].snippet.thumbnails.standard,
                        publishedAt: fetchVideos[i].snippet.publishedAt,
                        oldView: videoDetail[j].newView,
                        oldLike: videoDetail[j].newLike,
                        oldDislike: videoDetail[j].newDislike,

                        newView: fetchVideos[i].statistics.viewCount,
                        newLike: fetchVideos[i].statistics.likeCount,
                        newDislike: fetchVideos[i].statistics.dislikeCount,
                    };
                    videos.push(video);
                    break;
                }
            }
        }
    }

    if (videoDetail.length === 0) {
        console.log('db is empty');
        const afterPost = await new VideoDetail({
            type: 'BTS',
            videos: videos,
            lastUpdated: Date.now(),
        }).save();
        console.log(chalk.green.inverse('complete post data to database!'));
    } else {
        console.log('database is not empty -> update database');
        const afterUpdate = await VideoDetail.updateOne(
            { type: 'BTS' },
            {
                $set: { videos: videos, lastUpdated: Date.now() },
            }
        );
        console.log('Time' + moment().format());
        console.log(chalk.green.inverse('update complete'));
        console.log('-------------------------------------------');
    }
}

const getConfig = async () => {
    const config = await Config.find({ type: 'BTS' });
    return {
        allow: config[0].allow,
        times: config[0].times,
    };
};

module.exports = async () => {
    let allow = false;
    let interval = 5 * 60 * 1000;

    const config = await getConfig();
    allow = config.allow;
    interval = config.times;
    console.log(allow, ' ', interval);

    setInterval(async () => {
        console.log('inside interval');
        const config = await getConfig();
        allow = config.allow;
        interval = config.times;
        console.log(allow, ' ', interval);

        if (allow) {
            updateDb();
        }
    }, interval);
};
