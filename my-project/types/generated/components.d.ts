import type { Schema, Struct } from '@strapi/strapi';

export interface ArtistsArchiveArtist extends Struct.ComponentSchema {
  collectionName: 'components_artists_archive_artists';
  info: {
    description: '';
    displayName: 'archiveArtist';
  };
  attributes: {
    album: Schema.Attribute.String;
    albumLink: Schema.Attribute.String;
    homeImage: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    name: Schema.Attribute.String;
    thumbImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
  };
}

export interface ArtistsArtist extends Struct.ComponentSchema {
  collectionName: 'components_artists_artists';
  info: {
    description: '';
    displayName: 'artist';
    icon: '';
  };
  attributes: {
    albumImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    > &
      Schema.Attribute.Required;
    albumName: Schema.Attribute.String & Schema.Attribute.Required;
    albumUrl: Schema.Attribute.String;
    biography: Schema.Attribute.Blocks;
    homeImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    > &
      Schema.Attribute.Required;
    homeImagePosition: Schema.Attribute.String;
    medias: Schema.Attribute.Component<'medias.medias-with-link', true>;
    name: Schema.Attribute.String & Schema.Attribute.Required;
    slug: Schema.Attribute.String & Schema.Attribute.Required;
    spotifyID: Schema.Attribute.String;
    thumbImage: Schema.Attribute.Media<'images' | 'files'>;
    youtubeID: Schema.Attribute.String;
  };
}

export interface MediasMediasWithLink extends Struct.ComponentSchema {
  collectionName: 'components_medias_medias_with_links';
  info: {
    description: '';
    displayName: 'mediasWithLink';
  };
  attributes: {
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    link: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'artists.archive-artist': ArtistsArchiveArtist;
      'artists.artist': ArtistsArtist;
      'medias.medias-with-link': MediasMediasWithLink;
    }
  }
}
