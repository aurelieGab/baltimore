import Image from 'next/image'
import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

// const ArtistImg = styled(Image)`
//   position: absolute;
//   top: 0;
//   left: 0;
//   right: 0;
//   bottom: 0;
//   z-index: 0;
// `

const ArtistImg = styled(Image)`
  left: 300px;
`

const SliderContainer = styled.div`
  width: ${4 * 100}vw;
  background: red;
`

const Slider = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1))
  }

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? slides.length - 1 : prevIndex - 1))
  }

  // useEffect(() => {
  //   const timer = setInterval(goToNext, 10000)
  //   return () => clearInterval(timer)
  // }, [])

  return (
    <SliderContainer>
      <button onClick={goToPrevious}>Précédent</button>

      <ArtistImg
        src={slides[currentIndex]}
        fill={true}
        alt={`Slide ${currentIndex}`}
        objectFit="cover"
      />
      <button onClick={goToNext}>Suivant</button>
    </SliderContainer>
  )
}

export default Slider
