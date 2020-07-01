const axios = require('axios');

const keys = require('../config/keys');

module.exports = axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet,statistics',
        key: keys.apiKey1,
    },
});
