const mongoose = require('mongoose');
const { Schema } = mongoose;

const VideoDetailSchema = new Schema({
    type: String,
    videos: Array,
    lastUpdated: Date,
});

mongoose.model('videoDetail', VideoDetailSchema);
