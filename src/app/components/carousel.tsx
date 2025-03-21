import { Media } from '@/app/utils/fetchMedia'
import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'

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
  padding: 0 40px 20px 0;
`

const Title = styled.div<{ color?: string }>`
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

const SlideButton = styled.button<{ color?: string }>`
  padding: 0 10px;
  background: none;
  border: 1px solid ${({ color }) => (color ? color : '#fff')};
  border-radius: 16px;
  color: ${({ color }) => (color ? color : '#fff')};
  line-height: 34px;
`

interface ImageSliderProps {
  slides: Media[]
}

const ImageSlider = ({ slides }: ImageSliderProps) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const autoplayRef = useRef<NodeJS.Timeout | null>(null)

  const stopAutoplay = () => {
    if (autoplayRef.current) {
      clearInterval(autoplayRef.current)
      autoplayRef.current = null
    }
  }

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length)
    stopAutoplay()
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length)
    stopAutoplay()
  }

  useEffect(() => {
    autoplayRef.current = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length)
    }, 6000)

    return () => stopAutoplay()
  }, [])

  return (
    <SliderContainer>
      <SliderTrack style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {slides.map((image, index) => (
          <SlideImage key={index} src={image.source_url} position={image.background_position}>
            <Title color={image.text_color}>{image.title.rendered}</Title>
            <SlideButton color={image.text_color}>Show more</SlideButton>
          </SlideImage>
        ))}
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

export default ImageSlider
