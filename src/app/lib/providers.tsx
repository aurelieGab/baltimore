'use client'

import StyledComponentsRegistry from './registry'
import { ThemeProvider } from 'styled-components'
import theme from '../styles/theme'
import GlobalStyles from '@/app/styles/globalStyles'
import Header from '@/app/components/shared/header'

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
