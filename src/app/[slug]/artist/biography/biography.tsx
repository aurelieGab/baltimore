import { styled } from '~/styled-system/jsx'
/* eslint-disable-next-line @typescript-eslint/no-unused-vars */
import { Hind } from 'next/font/google'
import { safeParse } from '@/app/[slug]/artist/biography/parseHtml/parseHtml'

const Bio = styled.div`
  font-size: 1rem;
  line-height: 1.5rem;
  padding-right: 2rem;
  p {
    padding-bottom: 1.5rem;
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

interface IBiography {
  content: string
}

const Biography: React.FC<IBiography> = ({ content }) => (
  <Bio>{content && <div>{safeParse(content)}</div>}</Bio>
)

export default Biography
