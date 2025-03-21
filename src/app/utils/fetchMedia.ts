
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


    export const fetchMedia = async (
      setData: React.Dispatch<React.SetStateAction<Media[]>>, 
      setLoading: React.Dispatch<React.SetStateAction<boolean>> 
    ): Promise<void> => {
      try {
        const res = await fetch(`${WORDPRESS_API_URL}/media?per_page=20`, {
          headers: {
            'Accept': 'application/json',
          },
        });
        const data = await res.json()
        setData(data) // Stocke les données récupérées
      } catch (error) {
        console.error('Erreur lors de la récupération des médias:', error)
      } finally {
        setLoading(false)
      }
    }
