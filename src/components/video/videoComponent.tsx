import React, { useState, useEffect, useRef } from 'react'
import YouTube from 'react-youtube'
import { styled } from '~/styled-system/jsx'

const VideoContainer = styled.div`
  position: relative;
  padding-top: 66.8%;

  & div {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`

const VideoComponent = ({ ...props }) => {
  const videoId = 'EvVc2SWE-Sk'
  const [isIntersecting, setIsIntersecting] = useState(false)
  const [player, setPlayer] = useState<YT.Player | null>(null)
  const observerTargetRef = useRef<HTMLDivElement | null>(null)

  const opts = {
    width: '100%',
    playerVars: {
      autoplay: 0,
      mute: 1,
    },
  }

  useEffect(() => {
    if (!observerTargetRef.current) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting)
      },
      { threshold: 0.5 },
    )

    observer.observe(observerTargetRef.current)

    return () => {
      if (observerTargetRef.current) {
        observer.unobserve(observerTargetRef.current)
      }
    }
  }, [])

  useEffect(() => {
    if (!player) {
      return
    }

    const iframe = player.getIframe()
    if (!iframe || !iframe.src) {
      return
    }

    if (isIntersecting) {
      player.playVideo()
    } else {
      player?.pauseVideo() // Ajout d'une vérification pour éviter l'erreur
    }
  }, [isIntersecting, player])

  const onReady = (event: YT.PlayerEvent) => {
    if (event?.target) {
      setPlayer(event.target)
    } else {
      console.error('YouTube player instance is not disponible.')
    }
  }

  return (
    <VideoContainer {...props}>
      <YouTube
        videoId={videoId}
        opts={opts}
        onReady={onReady}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
        }}
      />
      <div
        ref={observerTargetRef}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          pointerEvents: 'none',
        }}
      ></div>
    </VideoContainer>
  )
}

export default VideoComponent
