import {useState} from 'react';
import { useNavigation } from '@react-navigation/native';

import { groupCreate } from '../../storage/group/groupCreate';

import { Header } from '@components/Header';
import { HighLight } from '@components/HighLight';
import { Button } from '@components/Button';

import { Container, Content, Icon } from './styles';
import { Input } from '@components/Input';

export function NewGroup() {
  const navigation = useNavigation();

  const [ group, setGroup ] = useState('');

   async function handleNew(){

    try{
    
      await groupCreate(group)
      navigation.navigate('players', { group });
    
    } catch(error) {
      console.log(error);
    } 

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
