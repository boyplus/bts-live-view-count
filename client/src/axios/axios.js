import axios from 'axios';
const KEY = 'AIzaSyBWJPhqEftWmCfBy3U5n5Lh4Vo9KWj7tlc';
export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3/',
    params: {
        part: 'snippet,statistics',
        key: KEY,
    },
});
