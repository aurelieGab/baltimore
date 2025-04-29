'use client'

import StyledComponentsRegistry from './registry'
import { ThemeProvider } from 'styled-components'
import theme from '../styles/theme'
import GlobalStyles from '@/styles/globalStyles'
import Header from '@/components/header/header'

const Providers = (props: React.PropsWithChildren) => {
  return (
    <StyledComponentsRegistry>
      <GlobalStyles />
      <ThemeProvider theme={theme}>
        <Header white />
        {props.children}
      </ThemeProvider>
    </StyledComponentsRegistry>
  )
}

export default Providers
