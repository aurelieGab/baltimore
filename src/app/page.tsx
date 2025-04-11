import Home from '@/app/home/home'
import { draftMode } from 'next/headers'

const HomePage = async () => {
  const token = process.env.STRAPI_API_TOKEN
  const strapiUrl = process.env.NEXT_PUBLIC_STRAPI_API_URL
  const draft = await draftMode()
  const isEnabled: boolean = draft.isEnabled

  try {
    const response = await fetch(
      `${strapiUrl}/api/artists?populate[artistInfo][populate]=homeImage&status=${
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

    return <Home artists={artists} />
  } catch (error) {
    console.error('Erreur de fetch:', error)
    return <div>Erreur lors du chargement des artistes.</div>
  }
}

export default HomePage
