import { styled } from '~/styled-system/jsx'

const Audio = styled.div`
  position: relative;
  width: 100%;
`

const Spotify: React.FC<{ id: string }> = ({ id }) => {
  if (!id) {
    console.error('Erreur : Aucun ID fourni pour le Spotify Embed.')
    return <div>Erreur : Aucun ID fourni pour le Spotify Embed.</div>
  }

  return (
    <Audio>
      <iframe
        src={`https://open.spotify.com/embed/album/${id}?utm_source=generator&theme=0`}
        width="100%"
        height="500"
        frameBorder="0"
        allowFullScreen
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      ></iframe>
    </Audio>
  )
}

export default Spotify
