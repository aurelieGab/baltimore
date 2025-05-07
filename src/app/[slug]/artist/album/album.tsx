import { styled } from '~/styled-system/jsx'
import { Oswald, Hind } from 'next/font/google'
import Image from 'next/image'
import DownButton from '@/components/button/downButton'
import { IArtist } from '@/types/types'

const oswald = Oswald({ weight: '400', subsets: ['latin'] })
const lora = Hind({ weight: '400', subsets: ['latin'] })

const Content = styled.div`
  display: flex;
  height: calc(100vh - var(--headerHeight));
  flex-direction: column;

  @media (min-width: 769px) {
    flex-direction: row;
  }
`

const ContentLeft = styled.div`
  position: relative;
  flex: 1;
`

const AlbumStyled = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  .overlay {
    transform: scale(1);
    transition: all 0.8s;
  }
  &:hover {
    .audioLink {
      opacity: 1;
      transition: all 0.8s;
    }
    .overlay {
      transform: scale(1.05);
    }
  }
`

const AlbumLink = styled.a`
  display: flex;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  padding-top: 2rem;
  align-items: center;
  font-size: 1rem;
  justify-content: center;
  opacity: 0;
  z-index: 2;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.8);
    z-index: 1;
  }
`
const AudioLink = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  color: #fff;
  flex-direction: column;
  font-size: 1.125rem;
  z-index: 2;
`

const AudioText = styled.p`
  padding-bottom: 1rem;
  pointer-events: none;
`

const ContentRight = styled.div`
  position: relative;
  padding: 1rem;
  flex: 0;

  @media (min-width: 769px) {
    padding-left: 2rem;
    width: 50%;
    align-content: center;
    flex: 1;
  }
`

const Name = styled.p`
  padding: 0 0 1.6rem;
  font-size: 2.75rem;

  @media (min-width: 769px) {
    font-size: 4.5rem;
    line-height: 5.75rem;
  }
`
const SubName = styled.p`
  color: #303030;
  font-size: 1.125rem;
  @media (min-width: 769px) {
    font-size: 1.5rem;
  }
`
const DownScrollButton = styled(DownButton)`
  margin-top: 1.5rem;

  @media (min-width: 769px) {
    margin-top: 2.25rem;
  }
`

const AlbumImage = styled(Image)`
  object-fit: cover;
`

interface IAlbum extends Pick<IArtist['acf'], 'artistName' | 'projectName' | 'projectUrl'> {
  albumImage: string
  onClick: () => void
}

const Album: React.FC<IAlbum> = ({ artistName, projectName, albumImage, projectUrl, onClick }) => {
  return (
    <Content>
      <ContentLeft>
        {albumImage && (
          <AlbumStyled className={lora.className}>
            <a href={projectUrl} target="_blank" title="Ecoutez l'album">
              <AlbumImage
                className="overlay"
                src={albumImage}
                alt={projectName}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </a>
            <AlbumLink className="audioLink" href={projectUrl} target="_blank" title="Ecoutez">
              <AudioLink>
                <AudioText>Ecoutez</AudioText>
              </AudioLink>
            </AlbumLink>
          </AlbumStyled>
        )}
      </ContentLeft>
      <ContentRight>
        <Name className={oswald.className}>{artistName}</Name>
        <SubName className={lora.className}>{projectName}</SubName>
        <DownScrollButton onClick={onClick} />
      </ContentRight>
    </Content>
  )
}

export default Album
