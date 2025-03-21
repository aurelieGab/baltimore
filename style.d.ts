// styled.d.ts
import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    bg?: string;
    headerHeight?: string;
    // Ajoutez d'autres propriétés de thème selon vos besoins
  }
}