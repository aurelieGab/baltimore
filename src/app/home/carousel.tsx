'use client'
import { IArtists } from '@/types/types'
import { useEffect, useRef, useState } from 'react'
import { styled } from '~/styled-system/jsx'
/* eslint-disable-next-line @typescript-eslint/no-unused-vars */
import { Hind } from 'next/font/google'
import Image from 'next/image'
const hind = Hind({ weight: '400', subsets: ['latin'] })

const SliderContainer = styled.div`
  width: 100vw;
  height: calc(100vh - var(--headerHeight));
  margin: 0 auto;
  overflow: hidden;
`

const SliderTrack = styled.div`
  display: flex;
  transition: transform 0.5s ease-in-out;
  height: 100%;
`

const SlideImage = styled.div`
  position: relative;
  display: flex;
  flex: 1 0 100%;
  align-items: flex-end;
  justify-content: flex-end;
  padding: 2rem;
  flex-direction: column;
`

const Title = styled.div`
  position: relative;
  padding-bottom: 0.75rem;
  color: #fff;
  font-size: 8rem;
  line-height: 7rem;
  z-index: 2;
`

const Arrow = styled.button`
  position: absolute;
  top: 50%;
  height: 60px;
  background: none;
  border: 0;
  cursor: pointer;
  outline: none;
  transition: ease 0.3s all;
  z-index: 1;

  /* Variants */
  &[data-variant='prev'] {
    left: 10px;
    &:hover {
      opacity: 0.7;
      left: 0;
    }
  }

  &[data-variant='next'] {
    right: 10px;
    &:hover {
      opacity: 0.7;
      right: 0;
    }
  }
`

const SlideButton = styled.a`
  position: relative;
  padding: 0.5rem;
  border: 1px solid #fff;
  border-radius: 1.25rem;
  color: #fff;
  font-size: 0.9rem;
  line-height: 2.1rem;
  z-index: 2;
`

const TestImage = styled(Image)`
  object-fit: cover;
  object-position: 50% 50%;
  z-index: 1;
`

const Carousel = ({ artists }: IArtists) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const autoplayRef = useRef<NodeJS.Timeout | null>(null)

  const stopAutoplay = () => {
    if (autoplayRef.current) {
      clearInterval(autoplayRef.current)
      autoplayRef.current = null
    }
  }

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % artists.length)
    stopAutoplay()
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + artists.length) % artists.length)
    stopAutoplay()
  }

  useEffect(() => {
    autoplayRef.current = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % artists.length)
    }, 6000)

    return () => stopAutoplay()
  }, [])

  return (
    <SliderContainer>
      <SliderTrack style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {artists.map((slide) => {
          const {
            id,
            slug,
            acf: { homeImage, artistName },
          } = slide

          return (
            <SlideImage key={`homeSlide${id}`}>
              <TestImage src={homeImage.url} fill alt={homeImage.alt} />
              <Title>{artistName}</Title>
              <SlideButton className={hind.className} href={`/${slug}`} target="_blank">
                Plus d'infos
              </SlideButton>
            </SlideImage>
          )
        })}
      </SliderTrack>

      <Arrow type="button" data-variant="prev" onClick={prevSlide}>
        <svg fill="#FFFFFF" width="50" height="50" viewBox="0 0 24 24">
          <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
          <path d="M0 0h24v24H0z" fill="none" />
        </svg>
      </Arrow>

      <Arrow type="button" data-variant="next" onClick={nextSlide}>
        <svg fill="#FFFFFF" height="50" viewBox="0 0 24 24" width="50">
          <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
          <path d="M0 0h24v24H0z" fill="none" />
        </svg>
      </Arrow>
    </SliderContainer>
  )
}

export default Carousel
