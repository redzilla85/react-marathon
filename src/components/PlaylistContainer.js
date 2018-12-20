import React from "react";
import PlaylistTile from './PlaylistTile'

class PlaylistContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedId: null
    }

    this.toggleSelected = this.toggleSelected.bind(this)
  }

  toggleSelected(playlistId) {
    this.setState({ selectedId: playlistId })
  }

  render() {
    let playlistTiles =   this.props.playlistData.map(playlist =>{
      let handleClick = () => {
        this.toggleSelected(playlist.id)
      }

      let selected
      if (this.state.selectedId===playlist.id){
        selected = true
      } else {
        selected = false
      }

      return (
        <PlaylistTile
          key={playlist.id}
          playlist={playlist}
          selected={selected}
          handleClick={handleClick}
        />
      )
    })
    return (
      <div className="small-6 columns">
        <h2>Playlist</h2>
        {playlistTiles}
      </div>
    );
  }
}

export default PlaylistContainer;
