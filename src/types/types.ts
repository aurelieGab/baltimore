export interface IBiography {
  content: {
    type: 'paragraph'
    children: {
      type: 'text'
      text: string
    }[]
  }[]
}

export interface IArtist {
  id: string
  name: string
  slug: string
  albumName: string
  albumImage: { url: string }
  albumUrl: string
  biography: IBiography['content']
  medias: {
    id: string
    link: string
    image: {
      url: string
      width: number
      height: number
      alternativeText: string
    }
  }[]
  spotifyID: string
  youtubeID: string
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
  artists: {
    id: string
    name: string
    homeImage: {
      url: string
      alternativeText: string
      formats: IImageFormat
    }
    thumbImage?: {
      url: string
      alternativeText: string
      formats: IImageFormat
    }
    slug: string
    homeImagePosition?: string
  }[]
}
