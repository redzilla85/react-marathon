import React from 'react'

const PlaylistTile = (props) => {

  let divclass
  if (props.selected) {
    divclass = 'selected'
  }

    return(
      <div onClick={props.handleClick} className={divclass}>
        {props.playlist.name}
      </div>
    )
}


export default PlaylistTile
