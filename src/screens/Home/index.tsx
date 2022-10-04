import { useState } from 'react';
import { Text, View, TextInput, TouchableOpacity, ScrollView, FlatList } from 'react-native';
import { Participant } from '../../components/Participant';
import { styles } from './styles'

export function Home() {
  const participants = ['Igor', 'Byron', 'Diego', 'Paula', 'Laura', 'Joana', 'Yasmin', 'Mayk', 'Isa', 'Bruna', 'Jéssica', 'Monstro'];

  function handleParticipantAdd() {
    console.log('participantes');
  }

  function handleParticipantRemove(name: string) {
    console.log(`Você removeu o participante: ${name}`);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Nome do evento</Text>
      <Text style={styles.eventDate}>Sexta, 4 de Novembro de 2022.</Text>
      <View style={styles.content}>
        <TextInput 
            style={styles.input}
            placeholder='Nome do participante' 
            placeholderTextColor='#6B6B6B'
        />
        <TouchableOpacity style={styles.plusButton} onPress={handleParticipantAdd}>
            <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>
      <FlatList 
        data={participants}
        keyExtractor={item => item}
        renderItem={({ item }) => (
          <Participant 
            key={item}
            name={item}
            onRemove={() => handleParticipantRemove(item)}
          />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <Text style={styles.emptyList}>
            Ninguém chegou no evento ainda? Adicione participantes a sua lista de presença.
          </Text>
        )}
      />
    </View>
  )
}