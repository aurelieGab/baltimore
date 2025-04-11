import Artists from '@/app/artists/artists'

const ArtistsPage = async () => {
  const token = process.env.STRAPI_API_TOKEN
  const strapiUrl = process.env.NEXT_PUBLIC_STRAPI_API_URL

  try {
    const response = await fetch(
      `${strapiUrl}/api/archives?populate[archiveArtist][populate]=homeImage`,
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
    const artists = data.data[0].archiveArtist

    return <Artists artists={artists} />
    // return <p>lzlzl</p>
  } catch (error) {
    console.error('Erreur de fetch:', error)
    return <div>Erreur lors du chargement des artistes.</div>
  }
}

export default ArtistsPage
