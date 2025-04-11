const WORDPRESS_API_URL = '/wp-json/wp/v2';

export interface Media {
  id: number;
  title: {
    rendered: string;
  };
  source_url: string;
  text_color: string;
  background_position: string;
  slug?: string;
}

// Modifie fetchMedia pour renvoyer les données ou une valeur par défaut en cas d'erreur
export const fetchMedia = async (): Promise<Media[]> => {
  try {
    const res = await fetch(`${WORDPRESS_API_URL}/media?per_page=20`, {
      headers: {
        'Accept': 'application/json',
      },
    });

    if (!res.ok) {
      throw new Error('Failed to fetch media');
    }

    const data: Media[] = await res.json();
    return data;
  } catch (error) {
    console.error('Erreur lors de la récupération des médias:', error);
    return []; // Retourne un tableau vide en cas d'erreur
  }
};
