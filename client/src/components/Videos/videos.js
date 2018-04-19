import _ from 'lodash';
import React, { Component } from 'react';
import SearchBar from "./searchBar";
import VideoList from "./video-list";
import VideoDetail from "./video-detail";
import DetailBox from "./detail-box";
import "./videos.css"
import YTSearch from 'youtube-api-search';
import API from '../../utils/API';

const API_KEY = 'AIzaSyBEUzi6YYrEM-_QXi4Bvtef3hL0Cd9qB3w';



export default class Videos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: [],
      selectedVideo: null
    }
    this.videoSearch("Coding");
  }

  handleVideoSelect(selectedVideo) {
      this.setState({selectedVideo});
      const activity = {
        title: selectedVideo.snippet.title,
        link: `https://www.youtube.com/embed/${selectedVideo.id.videoId}`,
        img: selectedVideo.snippet.thumbnails.default.url,
        description: selectedVideo.snippet.description
      }
      API.postActivity(activity);
  }

  videoSearch(term) {
    term += " tutorials"
    YTSearch({key: API_KEY, term}, (videos) => {
      this.setState({
        videos,
        selectedVideo: videos[0]
      })
    })
  }

  render() {
    const videoSearch = _.debounce(term => {this.videoSearch(term)}, 600 );
    return (
      <div>
        <SearchBar onSearchTermChange={videoSearch} />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList 
          onVideoSelect={this.handleVideoSelect.bind(this)}
          videos={this.state.videos}
        />
        <DetailBox video={this.state.selectedVideo}/>
      </div>
    );
  }
}
