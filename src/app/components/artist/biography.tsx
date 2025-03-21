import React from 'react'
import styled from 'styled-components'

const Bio = styled.div`
  font-size: 14px;
  line-height: 20px;
`

const BioText = styled.p`
  padding-bottom: 16px;
`

const SlideButton = styled.button`
  display: block;
  margin-top: 16px;
  padding: 0 10px;
  background: #fff;
  border: 1px solid #000;
  border-radius: 16px;
  color: #000;
  line-height: 34px;
`

const Biography = () => {
  return (
    <Bio>
      <BioText>
        Depuis 2022 la carrière de BEN plg a connu une évolution stratosphérique. À cette date le
        grand public le découvre pour la première fois dans un parking du Nord de la France. Deux
        minutes de performance pour Nouvelle École et une éviction cruelle par Shay. Une élimination
        en livestream que beaucoup aurait pris comme un frein à leur carrière mais pas lui. Pour BEN
        plg ce refus décuple sa motivation et marque le point de départ vers ses futurs succès.{' '}
      </BioText>
      <BioText>
        Avant cette participation le rappeur écume déjà les open mics et a plusieurs mixtapes à son
        actif. Nouvelle École apparaît comme un accident de parcours mais surtout comme une source
        de motivation supplémentaire dont accouchera son plus grand succès à date : ‘Mauvaise
        nouvelle’. Un titre électrique et un véritable manifeste de détermination. Le début d’un run
        de trois ans qui l’emmène aujourd’hui à cumuler les millions de streams et à remplir
        l’Olympia en plus d’apparaître comme l’un des artistes les plus programmés dans les salles
        de France.{' '}
      </BioText>
      <BioText>
        Un parcours des plus atypique pour celui qui a déjà connu plusieurs vies. Ancien directeur
        d’un centre pour adulte en situation de handicap, la musique a toujours été en toile de fond
        de tout. Rappeur donc mais aussi organisateur de concert à Dunkerque, il a également co-fond
        et géré un magazine pendant quelques temps avec la volonté de suivre les traces de son
        grand-père, ancien rédacteur en chef de La Voix du Nord. Au final il racontera la vie de ses
        proches et le quotidien des gens de sa région dans sa musique. Une mise en lumière de la
        ‘France du milieu’ au fil d’un rap social et engagé chargé en poésie.{' '}
      </BioText>
      <BioText>
        C’est la formule que l’on retrouve sur ‘Dire je t’aime’, premier album officiel de BEN plg
        sorti en janvier 2024. Un projet bourré d’humanité avec en fil conducteur de toute la
        narration ses proches, son quotidien et sa région. Un voyage introspectif dans ses
        relations. Une superbe plongée dans le quotidien du rappeur aussi en plus d’une déclaration
        d’amour touchante à ses proches.
      </BioText>
      <SlideButton>Lire plus</SlideButton>
      {/* <BioText>
        Un album qui prend la forme avec du recul la forme d’une rampe de lancement vers
        quelque-chose de plus grand. Un phénomène qui va s’amplifier tout au long de l’année 2024
        avec une audience qui ne cesse de grandir et crédibilité toujours plus importante acquise au
        fil de performances scéniques intenses.
      </BioText> */}
      {/* <BioText>
        {' '}
        Un an plus tard le rappeur est déjà de retour avec ‘Paraît que les miracles n’existent pas’.
        Un projet qui pose une évidence : BEN plg est en train de prendre sa pleine mesure. Tout est
        plus juste dans ce projet. Les textes. Les propos. Le squelette global. Les émotions. Les
        messages. Ce nouvel album confirme que BEN plg a bien grandi depuis 2022.{' '}
      </BioText>
      <BioText>
        ‘Paraît que les miracles n’existent pas’ est une nouvelle fresque sociale dans laquelle on
        retrouve les personnages récurrents du quotidien du rappeur. Ses grands-parents, sa mère
        (que l’on retrouve en featuring sur le titre ‘Le chant des oiseaux’), ses frères, ses amis.
        Autant de personnes qui s’inscrivent en fil conducteur de ce nouvel album. Et puis il y a
        cette musique ancrée dans un quotidien et une région (le Nord) qu’il dépeint avec une poésie
        toujours plus fine et touchante. Un rap humain et social qui touche en plein coeur et pose
        toujours plus BEN plg comme une référence du genre.{' '}
      </BioText>
      <BioText>
        Avec un Olympia complet, une augmentation toujours plus importante de sa fanbase et une
        visibilité toujours plus importante, BEN plg s’est complètement affranchi de cette image de
        loser sublime et se pose aujourd’hui comme le visage d’un rap humain bénéfique à l’ensemble
        d’un mouvement. Aucun ralentir en 2025 et avec la détermination qui le caractérise on peut
        d’ores et déjà affirmer que le bilan sera toujours plus positif à la sortie de son prochain
        projet.
      </BioText> */}
    </Bio>
  )
}

export default Biography
