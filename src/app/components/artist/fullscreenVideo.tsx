import React from 'react'
import styled from 'styled-components'
import Video from '@/app/components/video'
import Title from '@/app/components/title'
import { YouTubeProps } from 'react-youtube'

const Main = styled.div`
  position: relative;
  display: flex;
  align-items: flex-end;
  width: 100%;
  min-height: calc(100vh - ${(props) => props.theme.headerHeight});
  color: #fff;
  background: #f8f5f5;
`

const ArtistVideo = styled.div`
  margin: 0 0 7rem;
  width: 100%;
  color: #fff;
  font-family: 'Candal';
  opacity: 1;
  text-align: center;

  @media (min-width: 640px) {
    margin: 0 0 6rem 2rem;
    width: auto;
    text-align: left;
  }
`
const IconDown = styled.div`
  position: absolute;
  left: 50%;
  bottom: 2rem;
  cursor: pointer;
  transform: translate3d(-50%, 0, 0);
  z-index: 4;
`
const IconDownLink = styled.a`
  display: block;
  width: 4rem;
  height: 4rem;
  background: url(img/icons/arrowDown.svg);
  transition: transform 0.8s cubic-bezier(0.23, 1, 0.32, 1);

  :hover {
    transform: scale(1.1);
  }
`

const FullscreenVideo = () => {
  const opts: YouTubeProps['opts'] = {
    width: '100%',
    playerVars: {
      autoplay: 1,
      loop: 1,
      controls: 1,
      showinfo: 0,
      autohide: 0,
      enablejsapi: 1,
      modestbranding: 1,
    },
  }
  return (
    <div>
      <Main>
        <ArtistVideo>
          <Title id="benplg" name="BEN plg" clip="Paraît que les miracles n'existent pas" />
          <IconDown>
            <IconDownLink onClick={() => {}} />
          </IconDown>
        </ArtistVideo>
      </Main>
      <div>
        <Video id="benPlg" videoId="sbVAN3yFIx0" opts={opts} />
      </div>
    </div>
  )
}

export default FullscreenVideo
