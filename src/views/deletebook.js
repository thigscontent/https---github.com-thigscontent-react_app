import React, { useState, useEffect } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons'; // Importar o ícone do livro da biblioteca expo-icons
import axios from 'axios';

export default function DeleteBook() {
  const [book, setBook] = useState([]);
  const [bookModel,setBookModel] = useState('')
  
  useEffect(() => {
    getBook();
});

  async function getBook(){
    await axios.get('http://192.168.1.12:3000/book')
    .then(res=>{
      const data = res.data.map(book=>{
        return {id:book._id,name:book.name,author:book.author}
      })
      setBook(data)
    }).catch(
      exception=>{
        console.log(exception)
      } 
    )
  }

  async function deleteBook() {
    
    const bookToDelete = book.find(book => book.name.toLowerCase() === bookModel.toLowerCase());
    if (bookToDelete){
      await axios.delete(`http://192.168.1.12:3000/book/${book[0].id}`)
      .then(()=>{
        alert('Livro deletado')
        setBook(book.filter(book=>book.id !==bookToDelete.id))
      }).catch(
        exception=>{
          console.log(exception)
        }
      )
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <AntDesign name="book" size={50} color="#8B4513" />
      </View>
      <TextInput
        style={styles.textInput}
        placeholder="Livro a ser Deletado"
        value={bookModel}
        onChangeText={setBookModel}
      />
      <TouchableOpacity style={styles.button} onPress={deleteBook}>
        <Text style={styles.buttonText}>Deletar Livro</Text>
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
