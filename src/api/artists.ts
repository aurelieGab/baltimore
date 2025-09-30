export async function getArtists() {
  try {
    const res = await fetch(
      `${process.env.WORDPRESS_URL}/wp-json/wp/v2/artist?meta_key=_artist_visible&meta_value=1&orderby=menu_order&order=asc&per_page=100`,
      { next: { revalidate: 60 } }
    );

    if (!res.ok) {
      throw new Error(`Erreur HTTP ${res.status} lors du chargement des artistes`);
    }

    return await res.json();
  } catch (error) {
    console.error('Erreur lors du chargement des artistes:', error);
    return []; // Retourne un tableau vide en cas d'erreur pour éviter de faire planter la build
  }
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
