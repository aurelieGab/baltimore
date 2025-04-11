'use client'
import styled from 'styled-components'
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Bebas_Neue } from 'next/font/google'
import Carousel from '@/app/home/carousel'
import { IArtists } from '@/types/types'

const Container = styled.div`
  position: relative;
  font-family: 'Bebas Neue';
`

const Main = styled.main`
  position: relative;
  width: 100%;
  min-height: calc(100vh - ${(props) => props.theme.headerHeight});
  background-size: cover;
  background-position: 50% 0;
  display: flex;
  align-items: flex-end;
  justify-content: center;
`

const Home: React.FC<IArtists> = ({ artists }) => {
  return (
    <Container>
      <Main>
        <Carousel artists={artists} />
      </Main>
    </Container>
  )
}

export default Home
