import React, { useState } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import { Button, TextInput, List, IconButton } from 'react-native-paper';

export default function App() {
  const [text, setText] = useState('');
  const [items, setItems] = useState<string[]>([]); // Definindo o tipo explícito para o estado de itens como string[]

  const addItem = () => {
    if (text.trim() === '') return;
    setItems([...items, text]);
    setText('');
  };

  const removeItem = (index: number) => { // Definindo o tipo explícito para o parâmetro de índice como number
    const updatedItems = [...items];
    updatedItems.splice(index, 1);
    setItems(updatedItems);
  };

  return (
    <View style={styles.container}>
      <TextInput
        label="Novo item"
        value={text}
        onChangeText={setText}
        style={styles.input}
      />
      <Button mode="contained" onPress={addItem} style={styles.button}>
        Adicionar Item
      </Button>
      <FlatList
        data={items}
        renderItem={({ item, index }) => (
          <List.Item
            title={item}
            right={() => (
              <IconButton
                icon="delete"
                onPress={() => removeItem(index)}
              />
            )}
          />
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  input: {
    marginBottom: 10,
    backgroundColor: '#E6F1D6'
  },
  button: {
    marginBottom: 20,
    backgroundColor:'#7DAF43'
  },
});
