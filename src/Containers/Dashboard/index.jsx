/* eslint-disable jsx-a11y/media-has-caption */
/* eslint-disable no-console */
import React, { Component } from 'react';
import Player from '@components/Player';
import SideMenu from '@components/SideMenu';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getVideos, addToPlaylist } from '@reducers/videos';
import AddToPlayListForm from '@components/AddToPlaylistForm';

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videoSrc: '',
      videoTitle: '',
      start: '',
      end: '',
      videoIndex: 0,
      videoName: '',
      startTime: '',
      endTime: '',
      videoUrl: '',
    };
  }

  componentDidMount() {
    this.props.getVideos();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.message.id !== this.props.message.id) {
      this.props.getVideos();
    }
  }

  handleInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  resetTheState = () => {
    this.setState({
      videoSrc: '',
      videoTitle: '',
      start: '',
      end: '',
      videoIndex: 0,
      videoName: '',
      startTime: '',
      endTime: '',
      videoUrl: '',
    });
  };

  playTheVideo = (index = 0) => {
    this.setState({
      videoSrc: this.props.videos[index].url,
      videoTitle: this.props.videos[index].title,
      start: this.props.videos[index].startTime,
      end: this.props.videos[index].endTime,
      videoIndex: index
    });
  };

  playNext = (event) => {
    console.log(event.currentTarget.currentTime, this.state.end);
    if (Math.round(event.currentTarget.currentTime) === Math.round(this.state.end)) {
      this.setState((prevState) => {
        return { videoIndex: prevState.videoIndex + 1 };
      }, () => {
        if (this.props.videos.length <= this.state.videoIndex) {
          this.resetTheState();
        } else {
          this.playTheVideo(this.state.videoIndex);
        }
      });
    }
  };

  addToPlaylist = (e) => {
    e.preventDefault();
    const data = {
      url: this.state.videoUrl,
      title: this.state.videoName,
      startTime: this.state.startTime,
      endTime: this.state.endTime,
    };
    this.props.addToPlaylist(data);
    this.resetTheState();
  };

  render() {
    const {
      videoSrc,
      videoTitle,
      start,
      end,
      videoUrl,
      videoName,
      startTime,
      endTime
    } = this.state;
    const { videos } = this.props;
    if (videos !== null) {
      return (
        <div className="df jcs">
          <SideMenu heading="Library" videos={videos} play={this.playTheVideo} />
          {videoTitle !== '' && (
            <Player id="player" resetState={this.resetTheState} playNext={this.playNext} title={videoTitle} video={`${videoSrc}#t=${start},${end}`} />
          )}
          {videoTitle === '' && (
            <AddToPlayListForm videoUrl={videoUrl} videoName={videoName} startTime={startTime} endTime={endTime} handleInputChange={this.handleInputChange} addToPlaylist={this.addToPlaylist} />
          )}
        </div>
      );
    }
    return (
      <div>
        Loading...
      </div>
    );
  }
}

const mapStateToProps = ({ videos }) => ({
  videos: videos.videos,
  message: videos.message
});

const mapDispatchToProps = dispatch => bindActionCreators({
  getVideos,
  addToPlaylist
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard);
