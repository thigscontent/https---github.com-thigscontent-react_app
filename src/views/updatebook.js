import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import axios from 'axios';

export default function App() {
  const [bookId, setBookId] = useState('');
  const [newBookName, setNewBookName] = useState('');
  const [newAuthor, setNewAuthor] = useState('');

  async function editBook() {
    try {
      const response = await axios.put(`http://192.168.1.12:3000/books/${bookId}`, {
        name: newBookName,
        author: newAuthor
      });
      console.log("Livro editado:", response.data);
    } catch (error) {
      console.error("Erro ao editar livro:", error);
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <AntDesign name="book" size={50} color="#8B4513" />
      </View>
      <TextInput
        style={styles.textInput}
        placeholder="ID do Livro a ser Editado"
        value={bookId}
        onChangeText={setBookId}
      />
      <TextInput
        style={styles.textInput}
        placeholder="Novo Nome do Livro"
        value={newBookName}
        onChangeText={setNewBookName}
      />
      <TextInput
        style={styles.textInput}
        placeholder="Novo Autor"
        value={newAuthor}
        onChangeText={setNewAuthor}
      />
      <TouchableOpacity style={styles.button} onPress={editBook}>
        <Text style={styles.buttonText}>Editar Livro</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconContainer: {
    marginBottom: 20,
  },
  textInput: {
    width: '80%',
    height: 40,
    marginVertical: 10,
    paddingHorizontal: 10,
    borderWidth: 2,
    borderColor: '#8B4513',
    borderRadius: 8,
    backgroundColor: '#FFF',
  },
  button: {
    width: '80%',
    height: 40,
    marginTop: 20,
    backgroundColor: '#8B4513',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
