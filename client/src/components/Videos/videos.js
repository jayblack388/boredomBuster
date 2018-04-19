import _ from "lodash";
import React, { Component } from "react";
import SearchBar from "./searchBar";
import VideoList from "./video-list";
import VideoDetail from "./video-detail";
import DetailBox from "./detail-box";
import "./videos.css";
import API from "../../utils/API";


export default class Videos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: [],
      selectedVideo: null
    };
    this.videoSearch("Coding");
  }

  handleVideoSelect(selectedVideo) {
    this.setState({ selectedVideo });
    const activity = {
      title: selectedVideo.snippet.title,
      link: `https://www.youtube.com/embed/${selectedVideo.id.videoId}`,
      img: selectedVideo.snippet.thumbnails.default.url,
      description: selectedVideo.snippet.description
    };
    API.postActivity(activity);
  }

  videoSearch(term) {
    term += " tutorials";
    const search = { term }
    API.searchYT(search).then(response => {
      this.setState({
        videos: response.data,
        selectedVideo: response.data[0]
      });
    });
    /* YTSearch({key: API_KEY, term}, (videos) => {
      
    }) */
  }

  render() {
    const videoSearch = _.debounce(term => {
      this.videoSearch(term);
    }, 600);
    return (
      <div>
        <SearchBar onSearchTermChange={videoSearch} />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          onVideoSelect={this.handleVideoSelect.bind(this)}
          videos={this.state.videos}
        />
        <DetailBox video={this.state.selectedVideo} />
      </div>
    );
  }
}
