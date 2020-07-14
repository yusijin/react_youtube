import axios from 'axios';
const KEY = 'AIzaSyA0a2wlhzRiFTRStog8rSxicpb5pJdn3XU';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3/',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY,
       
    }
})