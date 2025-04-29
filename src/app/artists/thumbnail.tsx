import { IArtists } from '@/types/types'
import { styled } from '~/styled-system/jsx'
import Image from 'next/image'

const CoverContainer = styled('li', {
  base: {
    width: 'calc(20% - 16px)',
    display: 'block',
    margin: '8px',
  },
})

const Cover = styled('div', {
  base: {
    display: 'block',
    width: '100%',
    height: 'auto',
    '& img': {
      width: '100%',
      height: 'auto',
      objectFit: 'cover',
      aspectRatio: '1 / 1',
      objectPosition: '50% 50%',
    },
  },
})

const Thumbnail: React.FC<IArtists> = ({ artists }) => {
  console.log(artists)
  return artists.map((artist) => {
    const {
      id,
      slug,
      acf: { homeImage, thumbImage },
    } = artist

    console.log(artist.slug)
    return (
      <CoverContainer key={`thumbnail${id}`}>
        <a href={slug}>
          <Cover>
            <Image
              src={thumbImage ? thumbImage.url : homeImage.url}
              width={homeImage.width}
              height={homeImage.height}
              alt={homeImage.alt}
            />
          </Cover>
        </a>
      </CoverContainer>
    )
  })
}

export default Thumbnail
