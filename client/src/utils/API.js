import axios from "axios";


export default {
   getActivities: function() {
       return axios.get("/api/activity");
   },
   postActivity: function(activity) {
       return axios.post("/api/activity", activity);
   }
  };
  