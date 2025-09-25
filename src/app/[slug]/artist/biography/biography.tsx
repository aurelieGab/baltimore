import { styled } from '~/styled-system/jsx'
/* eslint-disable-next-line @typescript-eslint/no-unused-vars */
import { Hind } from 'next/font/google'
import { safeParse } from '@/app/[slug]/artist/biography/parseHtml/parseHtml'

const Bio = styled.div`
  font-family: 'Oswald';
  font-size: 1rem;
  line-height: 1.5rem;
  p {
    padding-bottom: 1.5rem;
    font-family: Hind;
  }
`

const Container = styled.div`
  flex: 1;
`

const AlbumLegend = styled.p`
  padding-top: 2rem;
  padding-bottom: 1rem;
  color: #303031;
  font-size: 1.2rem;
  font-weight: 400;
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
  <Container>
    <AlbumLegend>BIOGRAPHIE</AlbumLegend>
    <Bio>{content && <div>{safeParse(content)}</div>}</Bio>
  </Container>
)

export default Biography
