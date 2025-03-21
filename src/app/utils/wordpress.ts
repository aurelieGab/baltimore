const WORDPRESS_API_URL = 'http://baltimore.local/wp-json/wp/v2';

export async function getPosts() {
  const res = await fetch(WORDPRESS_API_URL + '/posts');
  // Si la requête échoue, vous pouvez lancer une erreur pour être gérée par un Error Boundary
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  return res.json();
}

export async function getMedias() {
  const res = await fetch(WORDPRESS_API_URL + '/media');
  // Si la requête échoue, vous pouvez lancer une erreur pour être gérée par un Error Boundary
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  return res.json();
}

