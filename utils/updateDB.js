const mongoose = require('mongoose');

const axios = require('../services/axios');
const keys = require('../config/keys');
const VideoList = mongoose.model('videoList');
const VideoDetail = mongoose.model('videoDetail');

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
                    console.log('this is the match ', fetchVideos[i].id);
                    const video = {
                        youtubeId: fetchVideos[i].id,
                        title: fetchVideos[i].snippet.title,
                        pic: fetchVideos[i].snippet.thumbnails.standard,
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
    console.log('videos');
    console.log(videos);

    if (videoDetail.length === 0) {
        console.log('db is empty');
        const afterPost = await new VideoDetail({
            type: 'BTS',
            videos: videos,
            lastUpdated: Date.now(),
        }).save();
        console.log('complete post data to database');
    } else {
        console.log('database is not empty -> update database');
        const afterUpdate = await VideoDetail.updateOne(
            { type: 'BTS' },
            {
                $set: { videos: videos, lastUpdated: Date.now() },
            }
        );
        console.log('update complete');
    }
}
module.exports = () => {
    const allow = true;

    const interval = 5000;
    setInterval(async () => {
        console.log('inside interval');
        if (allow) {
            updateDb();
        }
    }, interval);
};
