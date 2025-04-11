import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

// Style du curseur pulsant
const CursorWrapper = styled.div<{ showCursor: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  pointer-events: none;
  z-index: 9999;
  visibility: ${({ showCursor }) => (showCursor ? 'visible' : 'hidden')};
`

const CursorDot = styled.div`
  position: absolute;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: #3498db;
  transform: translate(-50%, -50%);
  animation: pulse 1.5s infinite ease-in-out;

  @keyframes pulse {
    0% {
      transform: scale(1);
      opacity: 1;
    }
    50% {
      transform: scale(1.5);
      opacity: 0.5;
    }
    100% {
      transform: scale(1);
      opacity: 1;
    }
  }
`

const Cursor: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [showCursor, setShowCursor] = useState(false) // État pour afficher ou non le curseur pulsant

  useEffect(() => {
    let mouseX = 0
    let mouseY = 0

    const handleMouseMove = (event: MouseEvent) => {
      mouseX = event.pageX
      mouseY = event.pageY
    }

    const updateCursorPosition = () => {
      setMousePosition({ x: mouseX, y: mouseY })
      requestAnimationFrame(updateCursorPosition)
    }

    document.addEventListener('mousemove', handleMouseMove)

    // Commencer à mettre à jour la position du curseur avec requestAnimationFrame
    updateCursorPosition()

    // Nettoyage de l'événement lors de la destruction du composant
    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  // Gérer l'affichage du curseur pulsant lors du survol des liens
  const handleMouseEnter = () => {
    setShowCursor(true) // Montrer le curseur lorsqu'on survole un lien
  }

  const handleMouseLeave = () => {
    setShowCursor(false) // Cacher le curseur lorsqu'on quitte le lien
  }

  useEffect(() => {
    // Ajouter les écouteurs d'événements sur tous les liens
    const links = document.querySelectorAll('a')
    links.forEach((link) => {
      link.addEventListener('mouseenter', handleMouseEnter)
      link.addEventListener('mouseleave', handleMouseLeave)
    })

    // Nettoyage des écouteurs d'événements
    return () => {
      links.forEach((link) => {
        link.removeEventListener('mouseenter', handleMouseEnter)
        link.removeEventListener('mouseleave', handleMouseLeave)
      })
    }
  }, [])

  return (
    <CursorWrapper showCursor={showCursor}>
      <CursorDot style={{ left: `${mousePosition.x}px`, top: `${mousePosition.y}px` }} />
    </CursorWrapper>
  )
}

export default Cursor
