import React from 'react'
import { styled } from '~/styled-system/jsx'

const Container = styled.div`
  position: relative;
  // padding-top: 33.4%;
  padding-top: 66.8%;
`

const YouTubeVideo: React.FC<{ videoId: string }> = ({ videoId, ...props }) => {
  const url = `https://www.youtube.com/embed/${videoId}?autoplay=1&controls=0&modestbranding=1&rel=0`

  return (
    <Container {...props}>
      <iframe
        title="YouTube Video"
        width="100%"
        height="100%"
        src={url}
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; fullscreen"
        style={{
          position: 'absolute',
          top: '0',
          left: 0,
          width: '100%',
          height: '99.8%',
          border: 'none',
        }}
      ></iframe>
    </Container>
  )
}

export default YouTubeVideo
