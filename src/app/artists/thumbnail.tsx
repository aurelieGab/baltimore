import { IArtists } from '@/types/types'
import styled from 'styled-components'
import Image from 'next/image'

const CoverContainer = styled.li`
  width: calc(20% - 16px);
  display: block;
  margin: 8px;
`
const Cover = styled(Image)`
  display: block;
  width: 100%;
  height: auto;
  aspect-ratio: 1 / 1;
  object-fit: cover;
  object-position: 50% 50%;
`

const Thumbnail: React.FC<IArtists> = ({ artists }) => {
  const strapiUrl = process.env.NEXT_PUBLIC_STRAPI_API_URL

  return artists.map((artist) => {
    const image = artist.thumbImage
      ? artist.thumbImage.formats.medium
      : artist.homeImage.formats.medium

    console.log(artist.thumbImage)
    return (
      <CoverContainer key={`thumbnail${artist.id}`}>
        <a href={artist.slug}>
          <Cover
            src={`${strapiUrl}${image['url']}`}
            width={image['width']}
            height={image['height']}
            alt={artist.name}
          />
        </a>
      </CoverContainer>
    )
  })
}

export default Thumbnail
