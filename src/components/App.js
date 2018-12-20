import React from "react";
import PlaylistContainer from './PlaylistContainer'
import SongContainer from './SongContainer'

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {

    return (
      <div className="app row callout">
        <h2 className="title">React Music Player</h2>
        <PlaylistContainer
          playlistData={this.props.data.playlists}
        />
        <SongContainer
          songData={this.props.data.songs}
        />
      </div>
    );
  }
}

export default App;
