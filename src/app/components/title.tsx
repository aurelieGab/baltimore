import React, { Fragment } from 'react'
import styled from 'styled-components'
import { media_iphoneX_landscape } from '@/app/styles/cssVar'

const ArtistName = styled.h1`
  position: relative;
  font-size: 3rem;
  text-transform: uppercase;
  padding: 0 0.5rem 0 0;
  z-index: 4;

  @media (min-width: 768px) {
    font-size: 6rem;

    img {
      width: 40%;
    }
  }

  @media only screen and ${media_iphoneX_landscape} {
    font-size: 3rem;
  }
`

const ArtistClip = styled.h2`
  position: relative;
  font-size: 2rem;
  font-family: 'Sulphur Point';
  font-style: italic;
  z-index: 4;

  @media (min-width: 768px) {
    font-size: 5rem;
  }

  @media only screen and ${media_iphoneX_landscape} {
    font-size: 2rem;
  }
`

const Title = (props) => (
  <Fragment>
    <ArtistName className={props.id}>{props.name}</ArtistName>
    <ArtistClip className={props.id}>{props.clip}</ArtistClip>
  </Fragment>
)

export default Title
