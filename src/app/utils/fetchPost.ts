
const WORDPRESS_API_URL = '/wp-json/wp/v2';

interface Post {
  id: number;
  title: {
    rendered: string;
    raw?: string;
  };
  content: {
    rendered: string;
    raw?: string;
  };
  excerpt: {
    rendered: string;
    raw?: string;
  };
  date: string;
  slug: string;
  status: string;
  type: string;
  link: string;
  author: number;
}

    export const fetchPost = async (
      setData: React.Dispatch<React.SetStateAction<Post[]>>, 
      setLoading: React.Dispatch<React.SetStateAction<boolean>> 
    ): Promise<void> => {
      try {
        const res = await fetch(`${WORDPRESS_API_URL}/posts`, {
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
