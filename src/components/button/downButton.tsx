import { styled } from '~/styled-system/jsx'
import { Hind } from 'next/font/google'
import Image from 'next/image'
const hind = Hind({ weight: '400', subsets: ['latin'] })

const DownButtonStyled = styled.a`
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  cursor: pointer;
  gap: 0.75rem;

  @media (min-width: 769px) {
    flex-direction: row;
    font-size: 1.5rem;
    gap: 0.625rem;
  }

  &:hover img {
    transform: scale(1.1);
  }
`

const IconDownLink = styled(Image)`
  display: block;
  width: 2.25rem;
  height: 2.25rem;
  transition: transform 0.8s cubic-bezier(0.23, 1, 0.32, 1);
  cursor: pointer;
`

const IconDownText = styled.p`
  font-size: 1.125rem;
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
