import { styled } from '~/styled-system/jsx'
import Image from 'next/image'
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Roboto, Oswald } from 'next/font/google'
import { IArtist } from '@/types/types'

const oswald = Oswald({ weight: ['300', '400', '500'], subsets: ['latin'] })

const PressStyled = styled.div`
  padding: 1.6rem;
  background: #f8f8f8;
  border-radius: 0.8rem;

  @media (min-width: 1024px) {
    display: inline-flex;
    flex-direction: column;
  }
`

const PressList = styled.ul`
  display: inline-flex;
  flex-wrap: wrap;
  list-style: none;
  gap: 2.4rem;
  align-items: center;
`

const PressItem = styled.li`
  max-width: 15rem;
`

const PressTitle = styled.p`
  padding-bottom: 2rem;
  color: #303031;
  font-size: 1.2rem;
`

const PressImage = styled(Image)`
  width: 100%;
  height: auto;
  max-width: 9rem;
  max-height: 5rem;
`

interface IPress {
  medias: IArtist['acf']['artist_medias']
  className?: string
}

const Press: React.FC<IPress> = ({ medias, className }) => (
  <PressStyled className={className}>
    <PressTitle className={oswald.className}>ILS EN PARLENT</PressTitle>
    <PressList>
      {medias.map((media, key) => {
        const {
          link,
          logo: { url, width, height, alt },
        } = media
        return (
          <PressItem key={`media${key}`}>
            <a href={link} target="_blank">
              <PressImage src={url} alt={alt} width={width} height={height} />
            </a>
          </PressItem>
        )
      })}
    </PressList>
  </PressStyled>
)

export default Press
