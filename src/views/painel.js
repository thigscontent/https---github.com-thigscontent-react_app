import React from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons'; // Importar o ícone do livro da biblioteca expo-icons
import axios from 'axios';

export default function Painel() {
  async function fetchData() {
    try {
      const response = await axios.get("http://192.168.1.12:3000/users");
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <AntDesign name="book" size={50} color="#8B4513" />
      </View>
      <TouchableOpacity style={styles.button} onPress={() => console.log("Adicionar livro")}>
        <Text style={styles.buttonText}>Adicionar Livro</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => console.log("Remover livro")}>
        <Text style={styles.buttonText}>Remover Livro</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => console.log("Procurar livro")}>
        <Text style={styles.buttonText}>Procurar Livro</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => console.log("Alterar informações do livro")}>
        <Text style={styles.buttonText}>Alterar Informações do Livro</Text>
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
  button: {
    width: '80%',
    height: 40,
    marginTop: 10,
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
