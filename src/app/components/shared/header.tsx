'use client'

import styled from 'styled-components'
import Image from 'next/image'
import Link from 'next/link'
import { Oswald } from 'next/font/google'
// import { Oswald } from 'next/font/google'

const oswald = Oswald({ subsets: ['latin'] })
// const anton = Oswald({ weight: '400', subsets: ['latin'] })

const HeaderStyled = styled('header').withConfig({
  shouldForwardProp: (prop) => prop !== 'white',
})<{ white: boolean }>`
  position: relative;
  color: ${(props) => (props.white ? '#000' : '#fff')};
  background: ${(props) => (props.white ? '#fff' : '#000')};
  z-index: 3;
  height: ${({ theme }) => theme.headerHeight};

  box-shadow: 0 1px rgba(0, 0, 0, 0.1);
`
const Nav = styled.nav`
  display: flex;
  padding: 1.6rem;
  align-items: center;
`
const NavList = styled.nav`
  display: flex;
  align-items: center;
  flex: 1;
  justify-content: flex-end;
  list-style: none;
`
const NavItem = styled.li`
  display: flex;
  align-items: center;
  padding: 0 1rem;
  font-size: 1.7rem;
  font-weight: 300;
  text-transform: uppercase;
`

const TextLink = styled(Link)`
  &:hover {
    transform: scale(1.02);
  }
`

const Logo = styled(Image)``

const IconImage = styled(Image)`
  display: block;
`

interface IHeader {
  white: boolean
}

const Header = (props: IHeader) => {
  const img = props.white ? '/logo.svg' : '/logoWhite.svg'

  return (
    <HeaderStyled white={props.white}>
      <Nav>
        <Link href="/">
          {' '}
          <Logo src={img} alt="Baltimore" width={200} height={24} priority />
        </Link>
        <NavList className={oswald.className}>
          <NavItem>
            <TextLink href="/artists">Artistes</TextLink>
          </NavItem>
          <NavItem>
            <TextLink href="/a-propos">A propos</TextLink>
          </NavItem>
          <NavItem>
            <TextLink href="/archives">Archives</TextLink>
          </NavItem>{' '}
          <NavItem>
            <TextLink href="/">Contact</TextLink>
          </NavItem>
          <NavItem>
            <TextLink
              href="https://www.instagram.com/baltimore.pr/"
              target="_blank"
              title="Instagram"
            >
              <IconImage
                src="/icons/insta.png"
                width={22}
                height={22}
                alt="Instagram"
                style={{ display: 'block' }}
              />
            </TextLink>
          </NavItem>
        </NavList>
      </Nav>
    </HeaderStyled>
  )
}

export default Header
