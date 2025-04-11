import Artist from '@/app/[slug]/artist'
import { IArtist } from '@/types/types'
import { draftMode } from 'next/headers'

const ArtistsPage = async ({ params }: { params: { slug: string } }) => {
  const token = process.env.STRAPI_API_TOKEN
  const strapiUrl = process.env.NEXT_PUBLIC_STRAPI_API_URL
  const draft = await draftMode()
  const isEnabled: boolean = draft.isEnabled

  const { slug } = await params

  if (!slug) {
    return <div>Erreur : Slug non défini.</div>
  }

  try {
    const response = await fetch(
      `${strapiUrl}/api/artists?filters[artistInfo][slug][$eq]=${slug}&populate[artistInfo][populate]=albumImage&populate[artistInfo][populate]=medias.image&status=${
        isEnabled ? 'preview' : 'live'
      }`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    )

    if (!response.ok) {
      console.log('Erreur HTTP:', response.status)
      throw new Error('Erreur lors de la récupération des artistes')
    }

    const data = await response.json()
    const artists = data.data[0].artistInfo
    const artist = artists.filter((artist: IArtist) => artist.slug === slug)[0]

    return <Artist artist={artist} key={artist.id} />
  } catch (error) {
    console.error('Erreur de fetch:', error)
    return <div>Erreur lors du chargement des artistes.</div>
  }
}

export default ArtistsPage
