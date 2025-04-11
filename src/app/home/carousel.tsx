import { IArtists } from '@/types/types'
import { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
/* eslint-disable-next-line @typescript-eslint/no-unused-vars */
import { Hind } from 'next/font/google'
const hind = Hind({ weight: '400', subsets: ['latin'] })

const SliderContainer = styled.div`
  width: 100vw;
  height: ${(props) => `calc(100vh - ${props.theme.headerHeight})`};
  margin: 0 auto;
  overflow: hidden;
`

const SliderTrack = styled.div`
  display: flex;
  transition: transform 0.5s ease-in-out;
  height: 100%;
`

const SlideImage = styled.div<{ src?: string; position?: string }>`
  width: 100vw;
  height: 100%;
  ${(props) => props.src && `background: url(${props.src})`};
  background-size: cover;
  background-position: center ${(props) => props.position};
  flex: 1 0 100%;
  align-content: flex-end;
  justify-items: flex-end;
  padding: 0 40px 40px 0;
`

const Title = styled.div<{ color?: string }>`
  padding-bottom: 1.2rem;
  font-size: 8rem;
  color: ${({ color }) => (color ? color : '#fff')};
  z-index: 1;
`

const Arrow = styled('button').withConfig({
  shouldForwardProp: (prop) => prop !== 'prev' && prop !== 'next',
})<{ prev?: boolean; next?: boolean }>`
  position: absolute;
  top: 50%;
  height: 60px;
  background: none;
  border: 0;
  cursor: pointer;
  outline: none;
  transition: ease 0.3s all;
  z-index: 1;

  ${(props) =>
    props.prev &&
    `left: 10px;

      &:hover {
        opacity: 0.7;
        left: 0;
      }`}

  ${(props) =>
    props.next &&
    `right: 10px;

      &:hover {
        right: 0;
        opacity: 0.7;
      }
    `}
`

const SlideButton = styled.a<{ color?: string }>`
  padding: 0.8rem;
  background: none;
  border: 1px solid ${({ color }) => (color ? color : '#fff')};
  border-radius: 20px;
  color: ${({ color }) => (color ? color : '#fff')};
  font-size: 1.5rem;
  line-height: 34px;
`

const Carousel = ({ artists }: IArtists) => {
  const strapiUrl = process.env.NEXT_PUBLIC_STRAPI_API_URL

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
        {artists.map(
          (slide, index) =>
            slide.homeImage?.url && (
              <SlideImage
                key={index}
                src={`${strapiUrl}${slide.homeImage.url}`}
                position={slide.homeImagePosition ?? 'center'}
              >
                <Title>{slide.name}</Title>
                <SlideButton className={hind.className} href={`/${slide.slug}`} target="_blank">
                  Plus d'infos
                </SlideButton>
              </SlideImage>
            ),
        )}
      </SliderTrack>

      <Arrow type="button" prev onClick={prevSlide}>
        <svg fill="#FFFFFF" width="50" height="50" viewBox="0 0 24 24">
          <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
          <path d="M0 0h24v24H0z" fill="none" />
        </svg>
      </Arrow>

      <Arrow type="button" next onClick={nextSlide}>
        <svg fill="#FFFFFF" height="50" viewBox="0 0 24 24" width="50">
          <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
          <path d="M0 0h24v24H0z" fill="none" />
        </svg>
      </Arrow>
    </SliderContainer>
  )
}

export default Carousel
