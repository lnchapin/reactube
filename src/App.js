import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import SearchBar from './components/SearchBar';
import VideoDetail from './components/VideoDetail';
import { VideoList, VideoListItem } from './components/VideoList';
import API from './utils/API';
import _ from "lodash";


class App extends Component {
  state = {
    term: '',
    videos: [],
    selectedVideo: null
  }


componentDidMount(){
  this.searchYoutube("baby goats");
}

searchYoutube = term =>{
  API.searchVideos(term)
    .then(res => this.setState({ videos: res.data.items, selectedVideo: res.data.items[0]})
  )
    .catch( err => console.log(err))
}

selectVideo = video => {
  this.setState({selectedVideo: video })
}

throttledSearch = _.debounce(this.searchYoutube, 800)

  render() {
    return (
      <Container>
        <Row>
          <Col>
            <SearchBar searchYoutube={this.throttledSearch}/>
          </Col>
        </Row>
        <Row>
          <Col md="9">
            <VideoDetail video={this.state.selectedVideo}/>
          </Col>
          <Col md="3">
            <VideoList>
              {this.state.videos.map(video =>(
                <VideoListItem
                  video={video}
                  key={video.id.videoId || video.id.playlistId}
                  selectedVideo={this.state.selectedVideo}
                  selectVideo={this.selectVideo}
                />
              ))}
            </VideoList>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;
