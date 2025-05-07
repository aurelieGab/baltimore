import { styled } from '~/styled-system/jsx'
import Image from 'next/image'
import { IArtists } from '@/types/types'

const CoverContainer = styled.li`
  display: block;
`

const Cover = styled.div`
  display: block;
  width: 100%;
  height: auto;

  img {
    width: 100%;
    height: auto;
    aspect-ratio: 1 / 1;
    object-fit: cover;
    object-position: 50% 50%;
  }
`

const Thumbnail: React.FC<IArtists> = ({ artists }) => {
  return artists.map((artist) => {
    const {
      id,
      slug,
      acf: { homeImage, thumbImage },
    } = artist

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
