const mongoose = require('mongoose');
const { Schema } = mongoose;

const VideoList = new Schema({
    displayTitle: { type: String, default: 'BTS MV' },
    youtubeId: String,
});

mongoose.model('videoList', VideoList);
