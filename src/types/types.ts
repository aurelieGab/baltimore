export interface IArtist {
    id: number
    slug: string
    acf: {
      artistName: string
      slug: string
      projectName: string,
      projectUrl?: string,
      homeImage: {
        url: string
        alt: string
        width: number
        height: number
      }
      albumImage?: {
        url: string
        alt: string
        width: number
        height: number
      }
      thumbImage?: {
        url: string
        alt: string
        width: number
        height: number
      }  
      artist_medias: {
        id: string
        link: string
        logo: {
          url: string
          width: number
          height: number
          alt: string
        }
      }[]
      spotifyId?: string
      youtubeId?: string
      biography?: string
    }
}

export interface IImageFormat  {
  thumbnail?: {
    url: string
    width: number
    height: number
  }
  medium: {
    url: string
    width: number
    height: number
  }
}


export interface IArtists {
  artists: IArtist[]
}

export type MediaType = {
  id: string
  link: string
  logo: {
    url: string
    width: number
    height: number
    alt: string
  }
}
