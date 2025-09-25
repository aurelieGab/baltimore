import { getArtists } from '@/api/artists'
import Home from '@/app/home/home'

const HomePage = async () => {
  const artists = await getArtists()

  return <Home artists={artists} />
}

export default HomePage
