import {useState} from 'react';
import { useNavigation } from '@react-navigation/native';

import { Header } from '@components/Header';
import { HighLight } from '@components/HighLight';
import { Button } from '@components/Button';

import { Container, Content, Icon } from './styles';
import { Input } from '@components/Input';

export function NewGroup() {
  const navigation = useNavigation();

  const [ group, setGroup ] = useState('');

  function handleNew(){
    navigation.navigate('players', { group });
  }

  return (
    <Container>
      <Header showBackButton/>

      <Content>
        <Icon />

        <HighLight
          title='Nova Turma'
          subtitle='Crie a turma para adicionar as pessoas'
        />
        
        <Input 
          placeholder='Nome da turma'
          onChangeText={setGroup}
        />

        <Button 
          title='Criar'
          style={{marginTop:20}}
          onPress={handleNew}
        />
      </Content>
    </Container>
  )
}
