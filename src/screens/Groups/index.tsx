import React from 'react'
import { 
  Container,
  Title, 
} from './styles'

import Header from '@components/Header';
import HighLight from '@components/HighLight';

export function Groups() {
  return (
    <Container>
      <Header />
      <HighLight
        title='Turmas'
        subtitle='Jogue com a sua turma'
      />
    </Container>
  );
}
