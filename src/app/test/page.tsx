// app/artists/page.tsx
import Biography from '@/app/[slug]/biography'
import styled from 'styled-components'

// Ce composant est un "Server Component" qui récupère les artistes côté serveur
const ArtistsPage = async () => {
  const token = process.env.STRAPI_API_TOKEN
  const strapiUrl = process.env.NEXT_PUBLIC_STRAPI_API_URL

  try {
    const response = await fetch(`${strapiUrl}/api/artists`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })

    if (!response.ok) {
      console.log('Erreur HTTP:', response.status)
      throw new Error('Erreur lors de la récupération des artistes')
    }

    const data = await response.json()
    const artists = data.data

    return (
      <div>
        {artists.map((artist) => (
          <div key={artist.id}>
            <h2>{artist.name}</h2>
            <Biography content={artist.biography} />
          </div>
        ))}
      </div>
    )
  } catch (error) {
    console.error('Erreur de fetch:', error)
    return <div>Erreur lors du chargement des artistes.</div>
  }
}

export default ArtistsPage
