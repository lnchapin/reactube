import axios from 'axios';
const apiKey='AIzaSyC2t5b0kNN6yDX8AHg3uXMO6fWgGiNMxhg';

export default {
  searchVideos: function (term) {
    return axios.get(`https://www.googleapis.com/youtube/v3/search`, {
      params:{
        key: apiKey,
        part: "snippet",
        q: term,
        maxResults: 8
      }
    })
  }
}
