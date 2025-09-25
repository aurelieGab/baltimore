import parse, { DOMNode, Element as HtmlParserElement } from 'html-react-parser'
import { styled } from '~/styled-system/jsx'

const Paragraph = styled.p`
  padding-bottom: 16px;
`

// 🔒 Type guard : on vérifie que c'est un élément HTML (pas un texte ou commentaire)
function isHtmlElement(node: DOMNode): node is HtmlParserElement {
  return node.type === 'tag'
}

// 🔧 Fonction de parsing safe
export const safeParse = (html: string) => {
  // Remplace les balises malformées (par exemple, les balises avec des guillemets mal fermés)
  const sanitizedHtml = html.replace(/<[^>]+"[^>]*>/g, '<p>Invalid tag</p>') // Exemple simple de nettoyage
  return parse(sanitizedHtml, {
    replace: (node) => {
      if (isHtmlElement(node)) {
        // Si la balise est un <p> ou <div>, on l'affiche comme un <Paragraph>
        if (node.name === 'p' || node.name === 'div') {
          return <Paragraph>{renderChildrenText(node)}</Paragraph>
        }
      }
      return undefined
    },
  })
}

// 🔄 Récupère les contenus texte (en ignorant les balises internes pour l’instant)
function renderChildrenText(node: HtmlParserElement) {
  return node.children.map((child) => ('data' in child ? child.data : '')).join('')
}
