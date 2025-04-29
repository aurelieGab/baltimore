export async function getArtists() {
  const res = await fetch(
    `${process.env.WORDPRESS_URL}/wp-json/wp/v2/artist?meta_key=_artist_visible&meta_value=1&orderby=menu_order&order=asc&per_page=100`,
    { next: { revalidate: 60 } }, // Revalidation ISR (60s)
  )

  if (!res.ok) throw new Error('Erreur lors du chargement des artistes')
  return res.json()
}

export async function fetchArtistBySlug({ slug }: { slug: string }) {
  const res = await fetch(
    `${process.env.WORDPRESS_URL}/wp-json/wp/v2/artist?slug=${slug}`,
    { next: { revalidate: 60 } }
  )

  if (!res.ok) {
    throw new Error('Erreur lors du chargement des artistes')
  }


  const data = await res.json()

  return data
}
