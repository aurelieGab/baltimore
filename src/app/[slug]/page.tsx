import { fetchArtistBySlug } from '@/api/artists'
import Artist from '@/app/[slug]/artist/artist'

interface Props {
  params: Promise<{ slug: string }>
}

const ArtistsPage = async ({ params }: Props) => {
  const { slug } = await params

  if (!slug) {
    return <div>Erreur : Slug non défini.</div>
  }
  const artist = await fetchArtistBySlug({ slug })

  return <Artist artist={artist} />
}

export default ArtistsPage
