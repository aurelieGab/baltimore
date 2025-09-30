import { getArtists } from '@/api/artists'
import Artists from '@/app/artists/artists'

const ArtistsPage = async () => {
  const artists = await getArtists()
  if (artists.length === 0) {
    return <p>No artists found or failed to fetch.</p>
  }
  return <Artists artists={artists} />
}

export default ArtistsPage
