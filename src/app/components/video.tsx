import React, { useState, useRef, useEffect, Fragment } from 'react'
import styled from 'styled-components'
import YouTube, { YouTubeProps, YouTubePlayer } from 'react-youtube'

const VideoStyled = styled.div<{ $iOs: boolean }>`
  width: 50vw; /* 50% de la largeur de l'écran */
  position: relative;
  ${(props) => !props.$iOs && `z-index: 3`};

  ::before {
    content: '';
    display: block;
    padding-top: 56.25%; /* Ratio 16:9 */
  }
  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`

const ForegroundVideo = styled.div`
  > div {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 120%;
  }
`

const MobLink = styled.button<{ $iOs: boolean }>`
  display: ${(props) => (!props.$iOs ? 'none' : 'block')};
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate3d(-50%, -100%, 0);
  z-index: 4;
`

const Sound = styled.div<{ $iOs: boolean }>`
  ${(props) =>
    !props.$iOs &&
    `
        display: flex;
        align-items: flex-end;
        position: absolute;
        left: 2rem;
        top: 0;
        height: 100vh;
        color: #fff;
        cursor: pointer;
        z-index: 4;
    `}
`

const SoundLink = styled.button<{ $iOs: boolean; mute: string }>`
  ${(props) =>
    !props.$iOs &&
    `
        display: block;
        padding: 0 0 3rem;
        width: 3rem;
        height: 3rem;
        background: ${
          props.mute ? `url(/img/icons/unMute.svg) no-repeat` : `url(/img/icons/mute.svg) no-repeat`
        };
        background-size: 2.5rem;
        transition: transform 0.8s cubic-bezier(0.23, 1, 0.32, 1);

        :hover {
            transform: scale(1.1);
        }
    `}
`

const Poster = styled.img<{ $iOs: boolean; $posterPos: string }>`
  display: ${(props) => (!props.$iOs ? 'none' : 'block')};
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: ${(props) => props.$posterPos || '50% 50%'};
  z-index: 3;
  border: 0;
  opacity: 1;
  transition: opacity linear 0.3s;
`

interface IVideo {
  id?: string
  videoId: string
  start?: number
  posterPos?: string
  opts: YouTubeProps['opts']
}

const Video: React.FC<IVideo> = ({ id, videoId, posterPos, opts }) => {
  const [muteState, setMuteState] = useState(false)
  const [iOsState, setIOsState] = useState(false)

  const soundButtonRef = useRef<HTMLButtonElement | null>(null)
  const posterRef = useRef<HTMLImageElement | null>(null)
  const playButtonRef = useRef<HTMLButtonElement | null>(null)
  const playerRef = useRef<YouTubePlayer>(null) //

  const onReady: YouTubeProps['onReady'] = (event) => {
    playerRef.current = event.target
    if (muteState) {
      playerRef.current.unMute()
    } else {
      playerRef.current.mute()
    }
  }

  useEffect(() => {
    setIOsState(/iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream)

    if (playerRef.current) {
      if (muteState) {
        playerRef.current.unMute()
      } else {
        playerRef.current.mute()
      }
    }
  }, [muteState])

  const playVideo = () => {
    if (posterRef.current) posterRef.current.style.opacity = '0'
    if (playButtonRef.current) playButtonRef.current.style.opacity = '0'
    setMuteState(!muteState)
    playerRef.current?.playVideo()
  }

  const onPlayerStateChange: YouTubeProps['onStateChange'] = (event) => {
    if (event.data === 2 && iOsState && playButtonRef.current) {
      playButtonRef.current.style.opacity = '1'
    }
  }

  return (
    <Fragment>
      <Sound $iOs={iOsState}>
        <SoundLink
          ref={soundButtonRef}
          mute={muteState ? 'true' : 'false'}
          onClick={() => setMuteState(!muteState)}
          $iOs={iOsState}
        />
      </Sound>
      <picture>
        {/* <source srcSet={`/img/artists/poster/webp/${id}.webp`} type="image/webp" /> */}
        <source srcSet={`/artists/cover/${id}.jpg`} type="image/jpg" />
        <Poster
          ref={posterRef}
          src={`/img/artists/poster/jpg/${id}.jpg`}
          $posterPos={posterPos || '50% 50%'}
          alt={id}
          $iOs={iOsState}
        />
      </picture>
      <VideoStyled $iOs={iOsState}>
        <ForegroundVideo>
          <YouTube
            videoId={videoId}
            opts={opts}
            onReady={onReady}
            onStateChange={onPlayerStateChange}
            style={{
              marginRight: '-20px',
            }}
          />
          <MobLink onClick={playVideo} ref={playButtonRef} $iOs={iOsState}>
            ▶
          </MobLink>
        </ForegroundVideo>
      </VideoStyled>
    </Fragment>
  )
}

export default Video
