import React from 'react'
import styled from 'styled-components'
import Image from 'next/image'

const PressStyled = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  gap: 24px;
  align-items: center;
`
const PressItem = styled.li``

const Press = () => {
  return (
    <>
      {/* <Separator></Separator>
    <AlbumLegend>ILS EN PARLENT </AlbumLegend> */}
      <PressStyled>
        <PressItem>
          <a href="" target="_blank">
            <Image src="/medias/svg/konbini.svg" alt="Konbini" width={60} height={60} />
          </a>
        </PressItem>
        <PressItem>
          <a href="" target="_blank">
            <Image src="/medias/svg/black/vice.svg" alt="Vice" width={65} height={20} />
          </a>
        </PressItem>
        <PressItem>
          <a href="" target="_blank">
            <Image src="/medias/svg/black/nova.svg" alt="Nova" width={65} height={15} />
          </a>
        </PressItem>
        <PressItem>
          <a href="" target="_blank">
            <Image src="/medias/svg/franceInter.svg" alt="France Inter" width={60} height={60} />
          </a>
        </PressItem>
        <PressItem>
          <a href="" target="_blank">
            <Image src="/medias/png/streetPress.png" alt="Street Press" width={60} height={60} />
          </a>
        </PressItem>
        <PressItem>
          <a href="" target="_blank">
            <Image src="/medias/png/views.png" alt="Views" width={65} height={18} />
          </a>
        </PressItem>
      </PressStyled>
    </>
  )
}

export default Press
