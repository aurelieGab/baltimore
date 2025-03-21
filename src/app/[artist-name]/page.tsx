'use client'
// import { Media, fetchMedia } from '@/app/utils/fetchMedia'
// import { useEffect, useState } from 'react'
// import { useParams } from 'next/navigation'
import styled from 'styled-components'
import { Oswald, Roboto } from 'next/font/google'
import Image from 'next/image'
import Biography from '@/app/components/artist/biography'
import Press from '@/app/components/artist/press'
import Spotify from '@/app/components/artist/spotify'

const lora = Roboto({ weight: '400', subsets: ['latin'] })
const oswald = Oswald({ weight: '400', subsets: ['latin'] })

const Content = styled.div`
  display: flex;
  // min-height: calc(100vh - ${(props) => props.theme.headerHeight});
`

const ContentLeft = styled.div`
  margin: 0 16px 16px 16px;
`

// const Poster = styled.img`
//   width: 100%;
//   object-fit: cover;
// `

const ContentRight = styled.div`
  width: 50%;
  padding: 0 16px 16px 16px;
  flex: 1;
`

const Name = styled.p`
  padding: 0 0 16px;
  font-size: 50px;
`
const SubName = styled.p`
  font-size: 24px;
  color: #303030;
`
const Album = styled.div``

const AlbumImage = styled(Image)`
  display: block;
`

const Separator = styled.div`
  margin: 20px 0 0;
  padding-bottom: 20px;
  border-top: 1px solid #e3e3e3;
`
export default function PageArtist() {
  // const params = useParams()
  // const [poster, setPoster] = useState<Media[]>([])
  // const [posters, setPosters] = useState<Media[]>([])
  // const [loading, setLoading] = useState<boolean>(true)

  // useEffect(() => {
  //   fetchMedia(setPosters, setLoading)
  // }, [])

  // useEffect(() => {
  //   if (posters.length !== 0) {
  //     setPoster(posters.filter((poster) => poster.slug === params['artist-name']))
  //   }
  // }, [posters, params])

  // useEffect(() => {
  //   console.log(params['artist-name'])
  // }, [params])

  // if (loading) {
  //   return <div>Loading...</div>
  // }

  return (
    <div>
      <Content className={lora.className}>
        <ContentLeft>
          {/* {poster.length !== 0 && <Poster src={poster[0].source_url} />} */}

          <Album>
            <a href="https://album.link/bdgzsvwr37wd9" target="_blank" title="Ecoutez l&apo;album">
              <AlbumImage
                src="/album/ben-plg.jpg"
                alt="Paraît que les miracles n'existent pas."
                width={640}
                height={640}
              />
            </a>
          </Album>
        </ContentLeft>
        <ContentRight>
          <Name className={oswald.className}>BEN plg</Name>
          <SubName className={oswald.className}>
            &quot;Paraît que les miracles n&apos;existent pas&quot;
          </SubName>

          <Separator></Separator>
          <Biography />
          <Separator></Separator>
          <Press />

          {/* <AlbumLegend>VIDEO </AlbumLegend> */}
          {/* <YouTubeVideo videoId="sbVAN3yFIx0" /> */}
        </ContentRight>
      </Content>
      <Spotify />
    </div>
  )
}
