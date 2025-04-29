import { styled } from '~/styled-system/jsx'
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Anton } from 'next/font/google'
import Medias from '@/app/artists/thumbnail'
import { IArtists } from '@/types/types'

const Container = styled('div', {
  base: {
    position: 'relative',
    minHeight: '100vh',
    fontFamily: 'Anton',
    background: '#efefeb',
    color: '#fff',
  },
})

const Main = styled('main', {
  base: {
    position: 'relative',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
})

const Content = styled('ul', {
  base: {
    display: 'flex',
    padding: '1.6rem',
    flexWrap: 'wrap',
    gap: '1.6rem',
    justifyContent: 'space-between',
  },
})

const Artists: React.FC<IArtists> = ({ artists }) => {
  return (
    <Container>
      <Main>
        <Content>
          <Medias artists={artists} />
        </Content>
      </Main>
    </Container>
  )
}

export default Artists
