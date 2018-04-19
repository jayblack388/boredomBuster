import axios from "axios";

export default {
  getActivities: function() {
    return axios.get("/api/activity");
  },
  postActivity: function(activity) {
    return axios.post("/api/activity", activity);
  },
  searchYT: function(term) {
      return axios.post("/api/yt", term)
  },
  searchMovie: function(query) {
      return axios.post("/api/movie", query)
  }
};
