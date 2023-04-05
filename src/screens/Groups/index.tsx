import React, { useState } from 'react';
import { FlatList } from 'react-native';

import { useNavigation } from '@react-navigation/native'

import { Header } from '@components/Header';
import { HighLight } from '@components/HighLight';
import { GroupCard } from '@components/GroupCard';
import { ListEmpty } from '@components/ListEmpty';

import { Container } from './styles';
import { Button } from '@components/Button';


export function Groups() {
  const [ groups, setGroups ] = useState<string[]>([]);
  const navigation = useNavigation(); 

  function handleNewGroup(){
    navigation.navigate('new');
  }
  return (
    <Container>
      <Header />
      <HighLight
        title='Turmas'
        subtitle='Jogue com a sua turma'
      />

      <FlatList 
        data={groups}
        keyExtractor={item => item}
        renderItem={({ item }) => (
          <GroupCard 
            title = {item}
          />
        )}
        contentContainerStyle={groups.length === 0 && { flex:1 }}
        ListEmptyComponent={ () => (
          <ListEmpty
            message='Que tal cadastrar a primeira turma?'
          />
        )}
      />

      <Button 
        title='Criar nova turma'
        onPress={handleNewGroup}
      />

    </Container>
  );
}
