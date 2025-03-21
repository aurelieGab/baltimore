import React from 'react'
import styled from 'styled-components'

const Audio = styled.div`
  width: 740px;
`
const Spotify = () => {
  return (
    <Audio>
      <iframe
        src="https://open.spotify.com/embed/album/6LUXDm9fS8mtWtJFhVcM95?utm_source=generator"
        width="100%"
        height="352"
        frameBorder="0"
        allowFullScreen={true}
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      ></iframe>
    </Audio>
  )
}

export default Spotify
