import React from 'react'
import styled from 'styled-components'
import Image from 'next/image'
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Roboto } from 'next/font/google'
import { IArtist } from '@/types/types'
import { extractNumbers } from '@/app/utils/extractNumber'

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
const PressItem = styled.li<{ width: string }>`
  width: ${({ width }) => width ?? `9rem`};
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

const Press: React.FC<Pick<IArtist, 'medias'>> = ({ medias, ...props }) => {
  const strapi = process.env.NEXT_PUBLIC_STRAPI_API_URL

  return (
    <PressStyled {...props}>
      <PressTitle>ILS EN PARLENT </PressTitle>
      <PressList>
        {medias.map((media) => {
          const width = media.image.caption ?? undefined
          return (
            <PressItem key={`media${media.id}`} width={width}>
              <a href={media.link} target="_blank" title={media.image.alternativeText}>
                <PressImage
                  src={`${strapi}${media.image.url}`}
                  alt={media.image.alternativeText}
                  width={media.image.width}
                  height={media.image.height}
                />
              </a>
            </PressItem>
          )
        })}
      </PressList>
    </PressStyled>
  )
}

export default Press
