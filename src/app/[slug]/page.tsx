import { fetchArtistBySlug } from '@/api/artists'
import Artist from '@/app/[slug]/artist/artist'

const ArtistsPage = async ({ params }: { params: { slug: string } }) => {
  const { slug } = await params

  if (!slug) {
    return <div>Erreur : Slug non défini.</div>
  }
  const artist = await fetchArtistBySlug({ slug })

  return <Artist artist={artist} />
}

export default ArtistsPage
