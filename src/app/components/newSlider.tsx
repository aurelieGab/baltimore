import { useEffect, useState } from 'react'
import styled from 'styled-components'

const slides = ['/josman-jul.png', '/lafleyne.png', '/zuukou_2.png', '/highKlassified.png']

const SliderContainer = styled.div`
  position: relative;
  width: 100vw;
  height: ${(props) => `calc(100vh - ${props.theme.headerHeight})`};
  overflow: hidden;
`

const SliderWrapper = styled.div`
  display: flex;
  height: 100%;
  transition: 0.5s all linear;
  will-change: transform;
`

const Arrow = styled.button<{ prev?: boolean; next?: boolean }>`
  position: absolute;
  top: 50%;
  background: none;
  height: 60px;
  border: 0;
  cursor: pointer;
  transition: ease 0.3s all;
  outline: none;
  z-index: 1;

  ${(props) =>
    props.prev &&
    `left: 0;

      &:hover {
        opacity: 0.7;
        left: -10px;
      }`}

  ${(props) =>
    props.next &&
    `right: 0;

      &:hover {
        right: -10px;
        opacity: 0.7;
      }
    `}
`

const Slide = styled.div`
  width: 100vw;
  font-size: 40vh;
  text-align: center;
  color: #fff;
  background-size: cover;
  background-position: center center;
`

const Play = styled.button`
  position: absolute;
  right: 5%;
  bottom: 9px;
  width: auto;
  height: auto;
  background: transparent;
  border: none;
  color: #3d3d3d;
  z-index: 1000000;

  &:hover {
    text-decoration: none;
    opacity: 0.7;
    cursor: pointer;
  }
`

const DotsContainer = styled.ul`
  position: absolute;
  left: 50%;
  bottom: 9px;
  transform: translateX(-50%);
`

const Dots = styled.li<{ isActive?: boolean }>`
  display: inline-block;
  padding: 5px;
  ${(props) =>
    props.isActive &&
    `
      button {
        color: #00d8ff;
      }
  `};

  button {
    background-color: transparent;
    border: none;
    color: #fff;

    &:hover {
      cursor: pointer;
      opacity: 0.7;
      text-decoration: none;
    }
  }
`

const NewSlider = () => {
  const [active, setActive] = useState<number>(0)
  const [autoplay, setAutoplay] = useState<boolean>(false)
  const max = slides.length

  const intervalBetweenSlides = () => autoplay && setActive(active === max - 1 ? 0 : active + 1)

  useEffect(() => {
    const interval = setInterval(() => intervalBetweenSlides(), 3000)
    return () => clearInterval(interval)
  })

  const toggleAutoPlay = () => setAutoplay(!autoplay)

  const nextOne = () => (active < max - 1 ? setActive(active + 1) : 0)

  const prevOne = () => active > 0 && setActive(active - 1)

  const isActive = (value: number) => active === value

  const setSliderStyles = () => {
    const transition = active * -100

    return {
      width: slides.length * 100 + 'vw',
      transform: 'translateX(' + transition + 'vw)',
    }
  }

  const renderSlides = () =>
    slides.map((item, index) => (
      <Slide key={index} style={{ backgroundImage: `url(${item})` }}>
        <p>Josman</p>
      </Slide>
    ))

  const renderDots = () =>
    slides.map(
      (
        silde,
        index, // check index
      ) => (
        <Dots isActive={isActive(index)} key={index}>
          <button onClick={() => setActive(index)}>
            <span>&#9679;</span>
          </button>
        </Dots>
      ),
    )

  const renderPlayStop = () =>
    autoplay ? (
      <svg fill="#FFFFFF" height="24" viewBox="0 0 24 24" width="24">
        <path d="M0 0h24v24H0z" fill="none" />
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z" />
      </svg>
    ) : (
      <svg fill="#FFFFFF" height="24" viewBox="0 0 24 24" width="24">
        <path d="M0 0h24v24H0z" fill="none" />
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z" />
      </svg>
    )

  return (
    <SliderContainer>
      <Arrow type="button" prev={true} onClick={() => prevOne()}>
        <svg fill="#FFFFFF" width="50" height="50" viewBox="0 0 24 24">
          <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
          <path d="M0 0h24v24H0z" fill="none" />
        </svg>
      </Arrow>
      <SliderWrapper style={setSliderStyles()}>{renderSlides()}</SliderWrapper>
      <Arrow type="button" next={true} onClick={() => nextOne()}>
        <svg fill="#FFFFFF" height="50" viewBox="0 0 24 24" width="50">
          <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
          <path d="M0 0h24v24H0z" fill="none" />
        </svg>
      </Arrow>
      <DotsContainer>{renderDots()}</DotsContainer>
      <Play type="button" onClick={toggleAutoPlay}>
        {renderPlayStop()}
      </Play>
    </SliderContainer>
  )
}

export default NewSlider
