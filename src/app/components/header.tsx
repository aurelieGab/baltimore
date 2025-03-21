'use client'

import styled from 'styled-components'
import Image from 'next/image'
import Link from 'next/link'
import { Bebas_Neue } from 'next/font/google'
// import { Oswald } from 'next/font/google'

// If loading a variable font, you don't need to specify the font weight
const anton = Bebas_Neue({ weight: '400', subsets: ['latin'] })
// const anton = Oswald({ weight: '400', subsets: ['latin'] })

const HeaderStyled = styled('header').withConfig({
  shouldForwardProp: (prop) => prop !== 'white',
})<{ white: boolean }>`
  position: relative;
  color: ${(props) => (props.white ? '#000' : '#fff')};
  background: ${(props) => (props.white ? '#fff' : '#000')};
  z-index: 3;
  height: ${({ theme }) => theme.headerHeight};
  text-transform: uppercase;
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
  padding: 0 1rem;
  font-size: 2.3rem;
`

const Logo = styled(Image)``

interface IHeader {
  white: boolean
}

const Header = (props: IHeader) => {
  const img = props.white ? '/logo.svg' : '/logoWhite.svg'

  return (
    <HeaderStyled white={props.white}>
      <Nav>
        <Logo src={img} alt="Baltimore" width={200} height={24} priority />
        <NavList className={anton.className}>
          <NavItem>
            <Link href="/">Home</Link>
          </NavItem>
          <NavItem>
            <Link href="/artists">Artistes</Link>
          </NavItem>
          <NavItem>About</NavItem>
          <NavItem>Archives</NavItem>
        </NavList>
      </Nav>
    </HeaderStyled>
  )
}

export default Header
