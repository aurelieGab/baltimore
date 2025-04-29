'use client'
import React, { useRef } from 'react'
import Album from '@/app/[slug]/artist/album/album'
import styled from 'styled-components'
import Press from '@/app/[slug]/artist/press/press'
// import VideoComponent from '@/app/components/shared/videoComponent'
import Biography from '@/app/[slug]/artist/biography/biography'
import Spotify from '@/app/[slug]/artist/spotify'
import { IArtist } from '@/types/types'

const BlockInfos = styled.div`
  position: relative;
  padding: 0 1.6rem 1.6rem;
  scroll-behavior: smooth;
  @media (min-width: 1024px) {
    display: flex;
  }
`
const PressBlock = styled(Press)`
  margin-top: 2.4rem;

  @media (min-width: 1024px) {
    margin-top: 4.8rem;
    flex: 1;
  }
`

const VideoBlock = styled.div`
  @media (min-width: 1024px) {
    margin-top: 3.2rem;
    margin-left: 3.2rem;
    flex: 1;
  }
`

const AlbumLegend = styled.p`
  padding-top: 3.2rem;
  padding-bottom: 1.6rem;
  color: #303031;
  font-family: Roboto;
  font-size: 1.4rem;
`

interface IArtistProps {
  artist: IArtist[]
}
const Artist: React.FC<IArtistProps> = ({ artist }) => {
  const {
    acf: { artistName, projectName, albumImage, projectUrl, biography, artist_medias, spotifyId },
    id,
  } = artist['0']

  console.log(spotifyId)

  const blockInfoRef = useRef<HTMLDivElement | null>(null)

  const scrollToInfo = () => {
    if (blockInfoRef.current) {
      blockInfoRef.current.scrollIntoView({
        behavior: 'smooth',
      })
    }
  }

  return (
    <div key={id}>
      <Album
        artistName={artistName}
        projectName={projectName}
        albumImage={albumImage ? albumImage.url : ''}
        projectUrl={projectUrl}
        onClick={scrollToInfo}
      />
      <BlockInfos ref={blockInfoRef}>
        <div style={{ flex: 1 }}>
          <AlbumLegend>BIOGRAPHIE </AlbumLegend>
          {biography !== undefined && <Biography content={biography} />}
        </div>
        <VideoBlock>
          {spotifyId && <Spotify id={spotifyId} />}
          {/* <VideoComponent /> */}
          {artist_medias && <PressBlock medias={artist_medias} />}
        </VideoBlock>
      </BlockInfos>
    </div>
  )
}

export default Artist
