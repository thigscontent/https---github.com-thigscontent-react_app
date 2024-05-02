import React from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import axios from 'axios';

export default function Painel({navigation:{navigate}}) {
  async function fetchData() {
    try {
      await axios.get("http://192.168.1.12:3000/book")
      .then(res=>{
        const data = res.data.map(book=>{
            return{
                name:book.name,
                author:book.author
            }
        })
        navigate('findbook',data)
      })
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <AntDesign name="book" size={50} color="#8B4513" />
      </View>
      <TouchableOpacity style={styles.button} onPress={() => navigate('createbook')}>
        <Text style={styles.buttonText}>Adicionar Livro</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigate('deletebook')}>
        <Text style={styles.buttonText}>Remover Livro</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={fetchData}>
        <Text style={styles.buttonText}>Procurar Livro</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigate('updatebook')}>
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
