import React from 'react'

const YouTubeVideo: React.FC<{ videoId: string }> = ({ videoId }) => {
  const url = `https://www.youtube.com/embed/${videoId}`

  return (
    <div>
      <iframe
        title="YouTube Video"
        width="100%"
        height="100%"
        src={url}
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          border: '1px solid red',
        }}
      ></iframe>
    </div>
  )
}

export default YouTubeVideo
