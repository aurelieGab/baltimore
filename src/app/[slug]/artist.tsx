'use client'
import React, { useRef } from 'react'
import Album from '@/app/[slug]/album'
import styled from 'styled-components'
import Press from '@/app/[slug]/press'
// import VideoComponent from '@/app/components/shared/videoComponent'
import Biography from '@/app/[slug]/biography'
import Spotify from '@/app/[slug]/spotify'
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
  artist: IArtist
}
const Artist: React.FC<IArtistProps> = ({ artist }) => {
  const strapiUrl = process.env.NEXT_PUBLIC_STRAPI_API_URL
  const blockInfoRef = useRef<HTMLDivElement | null>(null)

  const scrollToInfo = () => {
    if (blockInfoRef.current) {
      blockInfoRef.current.scrollIntoView({
        behavior: 'smooth',
      })
    }
  }

  return (
    <div key={artist.id}>
      <Album
        name={artist.name}
        albumName={artist.albumName}
        albumImage={`${strapiUrl}${artist.albumImage.url}`}
        albumUrl={artist.albumUrl}
        onClick={scrollToInfo}
      />
      <BlockInfos ref={blockInfoRef}>
        <div style={{ flex: 1 }}>
          <AlbumLegend>BIOGRAPHIE </AlbumLegend>
          {artist.biography !== undefined && <Biography content={artist.biography} />}
        </div>
        <VideoBlock>
          <Spotify id={artist.spotifyID} />
          {/* <VideoComponent /> */}
          {artist.medias.length > 0 && artist.medias[0].image !== null && (
            <PressBlock medias={artist.medias} />
          )}
        </VideoBlock>
      </BlockInfos>
    </div>
  )
}

export default Artist
