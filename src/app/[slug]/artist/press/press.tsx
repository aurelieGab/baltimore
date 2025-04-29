import React from 'react'
import styled from 'styled-components'
import Image from 'next/image'
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Roboto } from 'next/font/google'
import { IArtist } from '@/types/types'

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
const PressItem = styled.li<{ width: number }>`
  width: ${({ width }) => (width ? `${width}px` : `9rem`)};
`

const PressTitle = styled.p`
  padding-bottom: 20px;
  color: #303031;
  font-family: Roboto;
  font-size: 1.4rem;
`

const PressImage = styled(Image)`
  width: 100%;
  height: auto;
`

interface IPress {
  medias: IArtist['acf']['artist_medias']
}

const Press: React.FC<IPress> = ({ medias, ...props }) => {
  return (
    <PressStyled {...props}>
      <PressTitle>ILS EN PARLENT </PressTitle>
      <PressList>
        {medias.map((media) => {
          const {
            link,
            logo: { url, width, height, alt },
          } = media
          return (
            <PressItem key={`media${media.id}`} width={width}>
              <a href={link} target="_blank">
                <PressImage src={url} alt={alt} width={width} height={height} />
              </a>
            </PressItem>
          )
        })}
      </PressList>
    </PressStyled>
  )
}

export default Press
