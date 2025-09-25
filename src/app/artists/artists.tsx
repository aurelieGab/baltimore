import { styled } from '~/styled-system/jsx'
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Anton } from 'next/font/google'
import Medias from '@/app/artists/thumbnail'
import { IArtists } from '@/types/types'

const Container = styled.div`
  position: relative;
  min-height: 100vh;
  font-family: Anton;
  background: #efefeb;
  color: #fff;
`

const Main = styled.main`
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Content = styled.ul`
  display: grid;
  flex-wrap: wrap;
  padding: 1rem;
  gap: 1rem;
  grid-template-columns: repeat(1, 1fr);
  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
  }
  @media (min-width: 1280px) {
    grid-template-columns: repeat(5, 1fr);
  }
`

const Artists: React.FC<IArtists> = ({ artists }) => (
  <Container>
    <Main>
      <Content>
        <Medias artists={artists} />
      </Content>
    </Main>
  </Container>
)

export default Artists
