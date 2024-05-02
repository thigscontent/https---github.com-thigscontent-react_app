import React from 'react';
import { View,  Text, StyleSheet } from 'react-native';


export default function FindBook(props) {
  const books = props.route.params

  return (
    <View style={styles.container}>
     {books.map((book,index)=>(
        <View key={index}>
            <Text>Nome:{book.name}</Text>
            <Text>Autor:{book.author}</Text>
        </View>    
     ))}
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
  bookInfo: {
    marginTop: 20,
    padding: 10,
    borderWidth: 1,
    borderColor: '#8B4513',
    borderRadius: 8,
    backgroundColor: '#FFF',
  },
  bookInfoText: {
    fontSize: 16,
    marginBottom: 5,
  },
});
