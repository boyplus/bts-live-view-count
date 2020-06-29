import axios from 'axios';
import keys from '../config/keys';
export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3/',
    params: {
        part: 'snippet,statistics',
        key: keys.googleApiKey,
    },
});
