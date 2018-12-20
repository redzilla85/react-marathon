import React from 'react'

const SongTile = props => {

  let songClassName
  if (props.selected) {
    songClassName = "selected"
  }

  return(
    <div>
      <p
        onClick={props.handleClick}
        className={songClassName}
      >
      {props.song.name} - {props.song.artist}
      </p>
    </div>
  )
}

export default SongTile
