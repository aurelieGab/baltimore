'use client'
import styled from 'styled-components'
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Bebas_Neue, Lora, Roboto, Hind } from 'next/font/google'

const hind = Hind({ weight: '400', subsets: ['latin'] })

const TitleBlock = styled.div<{ white?: boolean }>`
  padding: 100px 0;
  background: ${({ white }) => (white ? '#fff' : '#000')};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const Title = styled.p`
  margin: 0 auto;
  color: #fff;
  font-size: 36px;
  font-family: 'Bebas Neue';
`

const Number = styled.p`
  margin: 0 auto;
  color: #000;
  font-size: 36px;
  font-family: 'Bebas Neue';
`

const Content = styled.div`
  margin: 56px auto 0;
  max-width: 700px;
  font-size: 18px;

  p {
    padding: 0 0 32px;
  }
`

const Numbers = styled.div`
  display: flex;
  text-align: center;
  justify-content: center;
  gap: 16px;
`

const SubTitle = styled.p`
  margin: 0 auto;
  color: #000;
  font-size: 24px;
`

const About = () => {
  return (
    <div>
      <TitleBlock>
        <div>
          <Title>
            Salut, nous c'est <br />
            <span style={{ fontSize: '100px' }}>Baltimore.</span>
          </Title>
        </div>
      </TitleBlock>
      {/* <Content className={hind.className}>
        <p>
          Nous sommes une agence de relation presse basée à Paris. Spécialisée dans le secteur
          musical et fort d’une expérience d’une dizaine d’années, l’agence valorise ce qu’il y a
          d’unique dans le projet de chaque artiste.{' '}
        </p>
        <p>
          Mettre en mots les histoires Imaginer des contenus uniques. Élaborer la stratégie média la
          plus précise possible. Extraire ce qui nous semble le plus juste pour diffuser le projet
          auprès des médias et susciter l’intérêt. Autant d’axes de travail mis en place par
          Baltimore pour assurer à chaque projet une visibilité maximale.{' '}
        </p>
        <p>
          Aujourd’hui Baltimore est reconnue pour sa capacité à mettre en lumière des artistes
          singuliers. Du rap à l’électro, de la pop à la chanson française, du kuduro au rock. Sans
          se limiter à une esthétique musicale notre volonté est de découvrir en permanence de
          nouveaux talents qui nous font vibrer et d’accompagner leurs projets de leur création
          jusqu’à leurs plus grands succès.
        </p>
      </Content> */}
      <Content className={hind.className}>
        <p>
          Nous sommes une agence de relation presse basée à Paris. Spécialisée dans le secteur
          musical et fort d’une expérience d’une dizaine d’années, l’agence valorise ce qu’il y a
          d’unique dans le projet de chaque artiste.{' '}
        </p>
        <p>
          <span
            style={{
              display: 'block',
              fontFamily: 'Bebas Neue',
              fontWeight: 'bold',
              fontSize: '26px',
              paddingBottom: '16px',
            }}
          >
            Mettre en mots les histoires
          </span>{' '}
          Imaginer des contenus uniques. Élaborer la stratégie média la plus précise possible.
          Extraire ce qui nous semble le plus juste pour diffuser le projet auprès des médias et
          susciter l’intérêt. Autant d’axes de travail mis en place par Baltimore pour assurer à
          chaque projet une visibilité maximale.{' '}
        </p>
        <p>
          <span
            style={{
              display: 'block',
              fontFamily: 'Bebas Neue',
              fontWeight: 'bold',
              fontSize: '26px',
              paddingBottom: '16px',
            }}
          >
            Promouvoir des artistes singuliers
          </span>
          Aujourd’hui Baltimore est reconnue pour sa capacité à mettre en lumière des artistes
          singuliers. Du rap à l’électro, de la pop à la chanson française, du kuduro au rock. Sans
          se limiter à une esthétique musicale notre volonté est de découvrir en permanence de
          nouveaux talents qui nous font vibrer et d’accompagner leurs projets de leur création
          jusqu’à leurs plus grands succès.
        </p>
      </Content>
      {/* <Numbers>
        <div>
          <SubTitle className={hind.className}>CREATION</SubTitle>
          <Number>2012</Number>
        </div>
        <div>
          <SubTitle className={hind.className}>ARTISTES</SubTitle>
          <Number>+50</Number>
        </div>
        <div>
          <SubTitle className={hind.className}>PARTENAIRES</SubTitle>
          <Number>+50</Number>
        </div>
      </Numbers> */}
    </div>
  )
}

export default About
