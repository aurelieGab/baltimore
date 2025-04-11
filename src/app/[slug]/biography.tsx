'use client'
import { IBiography } from '@/types/types'
import React from 'react'
import styled from 'styled-components'
/* eslint-disable-next-line @typescript-eslint/no-unused-vars */
import { Hind } from 'next/font/google'
const hind = Hind({ weight: '400', subsets: ['latin'] })

const Bio = styled.div`
  font-size: 1.6rem;
  line-height: 2.4rem;
  padding-right: 3.2rem;
  p {
    padding-bottom: 2.4rem;
    font-family: Hind;
  }
`

// const SlideButton = styled.button`
//   display: block;
//   margin-top: 16px;
//   padding: 0 10px;
//   background: #fff;
//   border: 1px solid #000;
//   border-radius: 16px;
//   color: #000;
//   line-height: 34px;
// `

const Biography: React.FC<IBiography> = ({ content }) => {
  const renderBiography = () => {
    if (!content) {
      return <div>Loading...</div>
    }

    return content.map((paragraph, index) => {
      if (paragraph.type === 'paragraph' && paragraph.children && paragraph.children.length > 0) {
        // On récupère le texte du premier enfant
        const text = paragraph.children[0].text
        return (
          <div className={hind.className} key={index} dangerouslySetInnerHTML={{ __html: text }} />
        )
      }
      return null
    })
  }

  return <Bio>{renderBiography()}</Bio>
}

export default Biography
