import React from 'react'
import styled from 'styled-components'
import { Hind } from 'next/font/google'
import Image from 'next/image'
const hind = Hind({ weight: '400', subsets: ['latin'] })

const DownButtonStyled = styled.a`
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  cursor: pointer;
  gap: 12px;

  @media (min-width: 769px) {
    flex-direction: row;
    font-size: 24px;
    gap: 10px;
  }

  &:hover img {
    transform: scale(1.1);
  }
`

const IconDownLink = styled(Image)`
  display: block;
  width: 3.6rem;
  height: 3.6rem;
  transition: transform 0.8s cubic-bezier(0.23, 1, 0.32, 1);
  cursor: pointer;
`

const IconDownText = styled.p`
  font-size: 1.8rem;
  @media (max-width: 768px) {
    display: none;
  }
`
interface DownButtonProps extends React.HTMLAttributes<HTMLAnchorElement> {
  onClick?: () => void // Définir le type de la fonction scrollToInfo
}

const DownButton: React.FC<DownButtonProps> = ({ onClick, ...props }) => {
  return (
    <DownButtonStyled {...props} onClick={onClick}>
      <IconDownLink src="/icons/arrowDown.svg" width={40} height={40} alt="Arrow down" />

      <IconDownText className={hind.className}>Découvrir l'artiste</IconDownText>
    </DownButtonStyled>
  )
}

export default DownButton
