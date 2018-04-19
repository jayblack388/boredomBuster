I want a google maps display similar to the one in the weatherMap app GOOGLE_KEY = 'AIzaSyBEUzi6YYrEM-_QXi4Bvtef3hL0Cd9qB3w'
I want a youtube search that return hobbies/tutorials related to a search API_KEY = 'AIzaSyDFnCOgSMJPyppqBH8bsVTqTmNiF5sIRwo'
I want meetup data relating to above search <https://www.meetup.com/meetup_api/>
I want to be able to access google Places or Yelp to feed restaurant information <https://developers.google.com/places/>
I want fandago to feed me movie data {Key: dz6hehmga6x6xe9bwdf5zuqp, Secret: Zt85xC2mZ3}
Build a homepage with a carousel of user selected videos/meetups/movies/places


new getRoutes for your api controller/routes/util... want to be able to hit multiple buttons, similar to giffy project for different arrays of movies. turn those arrays into carousels that display on the page-> may need another route `/movies/:button` where button is the array we want to display

fuck should have been working on this sooner

pseudo state {
    activities: [movies, food, hobbies]
    selectedActivity: {}

}