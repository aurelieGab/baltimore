'use client'
import { useRef } from 'react'
import { styled } from '~/styled-system/jsx'
import Album from '@/app/[slug]/artist/album/album'
import Press from '@/app/[slug]/artist/press/press'
// import VideoComponent from '@/app/components/shared/videoComponent'
import Biography from '@/app/[slug]/artist/biography/biography'
import Spotify from '@/app/[slug]/artist/spotify'
import { IArtist } from '@/types/types'

const BlockInfos = styled.div`
  position: relative;
  padding: 0 1rem 1rem;
  scroll-behavior: smooth;
  @media (min-width: 1024px) {
    display: flex;
    gap: 2rem;
  }
`
const PressBlock = styled(Press)`
  margin-top: 1.5rem;

  @media (min-width: 1024px) {
    margin-top: 3rem;
    flex: 1;
  }
`

const MediaBlock = styled.div`
  @media (min-width: 1024px) {
    margin-top: 2rem;
    flex: 1;
  }
`

interface IArtistProps {
  artist: IArtist[]
}
const Artist: React.FC<IArtistProps> = ({ artist }) => {
  const {
    acf: { artistName, projectName, albumImage, projectUrl, biography, artist_medias, spotifyId },
  } = artist['0']

  const blockInfoRef = useRef<HTMLDivElement | null>(null)

  const scrollToInfo = () => {
    if (blockInfoRef.current) {
      blockInfoRef.current.scrollIntoView({
        behavior: 'smooth',
      })
    }
  }

  return (
    <div>
      <Album
        artistName={artistName}
        projectName={projectName}
        albumImage={albumImage ? albumImage.url : ''}
        projectUrl={projectUrl}
        onClick={scrollToInfo}
      />
      <BlockInfos ref={blockInfoRef}>
        {biography !== '' && biography !== undefined && <Biography content={biography} />}
        <MediaBlock>
          {spotifyId && <Spotify id={spotifyId} />}
          {/* <VideoComponent /> */}
          {artist_medias && <PressBlock medias={artist_medias} />}
        </MediaBlock>
      </BlockInfos>
    </div>
  )
}

export default Artist
