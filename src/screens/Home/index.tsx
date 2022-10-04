import { useState } from 'react';
import { Text, View, TextInput, TouchableOpacity, FlatList, Alert } from 'react-native';
import { Participant } from '../../components/Participant';
import { styles } from './styles'

export function Home() {
  const [participants, setParticipants] = useState<string[]>([]);
  const [currentParticipant, setCurrentParticipant] = useState("");

  function handleParticipantAdd() {
    if(participants.includes(currentParticipant)) {
      return Alert.alert("Usuário já cadastrado!", "Este nome já existe dentro da base de dados. Por favor, tente outro!")
    }

    setParticipants(prevState => [...prevState, currentParticipant]);
  }

  function handleParticipantRemove(name: string) {
    Alert.alert("Remoção de usuário!", `Deseja remover o usuário ${name}?`, [
      {
        text: 'Sim',
        onPress: () => {
          const index = participants.indexOf(name);
          if(index > -1) {
            setParticipants([
              ...participants.slice(0, index),
              ...participants.slice(index + 1, participants.length)
            ])
            return Alert.alert("Usuário deletado!");
          }
        }
      },
      {
        text: 'Não',
        style: 'cancel'
      }
    ])
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
            value={currentParticipant}
            onChangeText={setCurrentParticipant}
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