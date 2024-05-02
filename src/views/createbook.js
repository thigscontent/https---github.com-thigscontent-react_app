import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons'; // Importar o ícone do livro da biblioteca expo-icons
import axios from 'axios';

export default function CreateBook() {
  const [bookName, setBookName] = useState('');
  const [author, setAuthor] = useState('');

  async function createBook() {
    try {
      // Enviar os dados para a API para criar o livro
      const response = await axios.post("http://192.168.1.12:3000/book", {
        name: bookName,
        author:author
      });
      alert('Livro Criado')
      console.log("Livro criado:", response.data);
    } catch (error) {
      console.error("Erro ao criar livro:", error);
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <AntDesign name="book" size={50} color="#8B4513" />
      </View>
      <TextInput
        style={styles.textInput}
        placeholder="Nome do Livro"
        value={bookName}
        onChangeText={setBookName}
      />
      <TextInput
        style={styles.textInput}
        placeholder="Autor"
        value={author}
        onChangeText={setAuthor}
      />
      <TouchableOpacity style={styles.button} onPress={createBook}>
        <Text style={styles.buttonText}>Criar Livro</Text>
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
