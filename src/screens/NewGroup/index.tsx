import React from 'react'

import { Header } from '@components/Header'
import { HighLight } from '@components/HighLight'
import { Button } from '@components/Button'

import { Container, Content, Icon } from './styles'

export function NewGroup() {
  return (
    <Container>
      <Header showBackButton/>

      <Content>
        <Icon />

        <HighLight
          title='Nova Turma'
          subtitle='Crie a turma para adicionar as pessoas'
        />

        <Button 
          title='Criar'
        />
      </Content>
    </Container>
  )
}
