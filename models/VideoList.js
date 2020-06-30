const mongoose = require('mongoose');
const { Schema } = mongoose;

const VideoList = new Schema({
    name: String,
    videos: Array,
});

mongoose.model('videos', VideoList);
