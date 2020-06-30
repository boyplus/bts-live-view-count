const mongoose = require('mongoose');
const { Schema } = mongoose;

const VideoList = new Schema({
    youtubeId: String,
});

mongoose.model('videoList', VideoList);
