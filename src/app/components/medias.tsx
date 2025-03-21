import { fetchMedia, Media } from '@/app/utils/fetchMedia'
import { nameToUrl } from '@/app/utils/nameToUrl'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

const CoverContainer = styled.li`
  width: calc(20% - 16px);
  display: block;
  margin: 8px;
`
const Cover = styled.img`
  display: block;
  width: 100%;
  aspect-ratio: 1 / 0.85;
  object-fit: cover;
  object-position: 50% 50%;
`

const Medias = () => {
  const [mediaData, setMediaData] = useState<Media[]>([])
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    fetchMedia(setMediaData, setLoading)
  }, [])

  if (loading) {
    return <div>Loading...</div>
  }

  return mediaData.map((media) => (
    <CoverContainer key={media.id}>
      <a href={`/${media.slug}`}>
        <Cover src={media.source_url} />
      </a>
    </CoverContainer>
  ))
}

export default Medias
