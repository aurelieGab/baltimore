import { styled } from '~/styled-system/jsx'
import Image from 'next/image'
import Link from 'next/link'
import { Oswald } from 'next/font/google'
// import { Oswald } from 'next/font/google'

const oswald = Oswald({ subsets: ['latin'] })
// const anton = Oswald({ weight: '400', subsets: ['latin'] })

const HeaderStyled = styled('header')`
  position: relative;
  height: var(--headerHeight);
  background: '#fff';
  box-shadow: 0 1px rgba(0, 0, 0, 0.1);
  color: '#000';
  z-index: 3;
`
const Nav = styled.nav`
  display: flex;
  padding: 1rem;
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
  padding: 0 0.625rem;
  font-size: 1.1rem;
  font-weight: 300;
  text-transform: uppercase;
`

const TextLink = styled(Link)`
  &:hover {
    transform: scale(1.02);
  }
`

const Header = () => {
  return (
    <HeaderStyled>
      <Nav>
        <Link href="/">
          <Image src="./logo.svg" alt="Baltimore" width={200} height={24} priority />
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
              <Image src="/icons/insta.png" width={22} height={22} alt="Instagram" />
            </TextLink>
          </NavItem>
        </NavList>
      </Nav>
    </HeaderStyled>
  )
}

export default Header
