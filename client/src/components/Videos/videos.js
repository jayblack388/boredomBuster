import _ from 'lodash';
import React, { Component } from 'react';
import SearchBar from "./searchBar";
import VideoList from "./video-list";
import VideoDetail from "./video-detail";
import "./videos.css"
import YTSearch from 'youtube-api-search';
import API from '../../utils/API';

const API_KEY = 'AIzaSyBEUzi6YYrEM-_QXi4Bvtef3hL0Cd9qB3w';



export default class Videos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: [],
      selectedVideo: null,
      offset: []
    }
    this.videoSearch("Coding");
  }

  videoSearch(term) {
    term += " tutorials"
    YTSearch({key: API_KEY, term}, (videos) => {
      this.setState({
        videos,
        selectedVideo: videos[0]
      })
      this.offset();
    })
  }

  offset() {
    const arr = this.state.videos.shift();
    this.setState({
      offset: arr
    })
  }

  render() {
    const videoSearch = _.debounce(term => {this.videoSearch(term)}, 600 );
    return (
      <div>
        <SearchBar onSearchTermChange={videoSearch} />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList 
          onVideoSelect={(selectedVideo) => {
            this.setState({selectedVideo});
            const activity = {
              title: selectedVideo.snippet.title,
              link: `https://www.youtube.com/embed/${selectedVideo.id.videoId}`,
              img: selectedVideo.snippet.thumbnails.default.url,
              description: selectedVideo.snippet.description
            }
            API.postActivity(activity);
          }}
          videos={this.state.videos}
          offset={this.state.offset}
        />
      </div>
    );
  }
}