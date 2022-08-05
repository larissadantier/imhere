import {useState} from 'react';
import {View, Text, TextInput, TouchableOpacity, FlatList} from 'react-native';
import Toast from 'react-native-toast-message';

import { showToast } from '../../helpers/showToast';

import { Participant } from '../../components/Participant';
import { styles } from './styles';

interface UserProps {
  id: number,
  name: string,
}

export function Home() {
  const [participants, setParticipants] = useState<UserProps[]>([]);

  const [name, setName] = useState('');

  const handleParticipantAdd = () => {
    if(!name) {
      showToast({
      type: 'error', 
      title: 'Ocorreu um erro!', 
      subtitle: 'O campo do nome do participante está vazio!'
    });
     return
    }

    const newUser = {
      id: participants.length + 1,
      name: name
    }

    setParticipants(prevState => [...prevState, newUser]);
    setName('');
    showToast({
      type: 'success', 
      title: 'Sucesso ao realizar a ação!', 
      subtitle: 'O participante foi adicionado com successo!'
    });
  };
 
  const handleParticipantRemove = (id: number) => {
    setParticipants(prevState => prevState.filter((participant) => participant.id !== id))

    showToast({
      type: 'success', 
      title: 'Sucesso ao realizar a ação!', 
      subtitle: 'O participante foi removido com successo!'
    });
  };

  return(
    <>
    <View style={styles.container}>
      <Text style={styles.eventName}>Nome do evento</Text>
      <Text style={styles.eventDate}>Sexta, 4 de Novembro de 2022.</Text>

      <View style={styles.form}>
        <TextInput 
          placeholder='Nome do participante' placeholderTextColor="#6B6B6B" 
          style={styles.input} 
          value={name}
          onChangeText={setName}
        />
        
        <TouchableOpacity onPress={handleParticipantAdd} style={styles.button}>
          <Text style={styles.buttonText}>+</Text>  
        </TouchableOpacity>
      </View>

      <FlatList 
        data={participants} 
        keyExtractor={(item) => item.id.toString()}
        renderItem={({item}) => (
          <Participant name={item.name} onRemove={() => handleParticipantRemove(item.id)}/>
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => <Text style={styles.eventEmpty}>Ninguém chegou ao evento ainda? Adicione participantes a sua lista de presença!</Text>}
      />
    </View>

      <Toast position='bottom'/>
    </>
  );
};