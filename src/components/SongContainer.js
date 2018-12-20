import React, { Component } from 'react'
import SongTile from './SongTile'

class SongContainer extends Component {
  constructor(props){
    super(props)
    this.state = {
      selectedSongId: null
    }
    this.selectSong = this.selectSong.bind(this)
  }

  selectSong(newSongId) {
    this.setState({
      selectedSongId: newSongId
    })
  }

  render(){
    let songTiles = this.props.songData.map(song => {
      let handleClick = () => {
        this.selectSong(song.id)
      }

      let selected
      if (song.id === this.state.selectedSongId) {
        selected = true
      } else {
        selected = false
      }

      return(
        <SongTile
          key={song.id}
          song={song}
          handleClick={handleClick}
          selected={selected}
        />
      )
    })

    return(
      <div className="small-6 columns">
        <h2>Songs</h2>
        {songTiles}
      </div>
    )
  }
}

export default SongContainer
