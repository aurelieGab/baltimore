'use client'
import styled from 'styled-components'
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Bebas_Neue } from 'next/font/google'
import ImageSlider from '@/app/components/carousel'
import { fetchMedia, Media } from '@/app/utils/fetchMedia'
import { useEffect, useState } from 'react'

const Container = styled.div`
  position: relative;
  font-family: 'Bebas Neue';
  background: #000;
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

export default function Home() {
  const [slides, setSlides] = useState<Media[]>([])
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    fetchMedia(setSlides, setLoading)
  }, [])

  if (loading) {
    return <div>Loading...</div>
  }

  return (
    <Container>
      <Main>
        <ImageSlider slides={slides} />
      </Main>
    </Container>
  )
}
