import { getArtists } from '@/api/artists'
import Artists from '@/app/artists/artists'

const ArtistsPage = async () => {
  const artists = await getArtists()
  return <Artists artists={artists} />
}

export default ArtistsPage
