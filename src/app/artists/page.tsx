'use client'
import styled from 'styled-components'
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Anton } from 'next/font/google'
import Medias from '@/app/components/medias'

const Container = styled.div`
  position: relative;
  min-height: 100vh;
  font-family: Anton;
  background: #efefeb;
  color: #fff;
`

const Main = styled.main`
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Content = styled.ul`
  display: flex;
  flex-wrap: wrap;
  padding: 16px;
`

export default function Artists() {
  return (
    <Container>
      <Main>
        <Content>
          <Medias />
        </Content>
      </Main>
    </Container>
  )
}
