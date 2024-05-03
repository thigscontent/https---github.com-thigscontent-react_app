// import React, { useState } from 'react';
// import { View, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';
// import { AntDesign } from '@expo/vector-icons';
// import axios from 'axios';

// export default function UpdateBook() {
//   const [bookId, setBookId] = useState('');
//   const [newBookName, setNewBookName] = useState('');
//   const [newAuthor, setNewAuthor] = useState('');

//   async function editBook() {
//     try {
//       const response = await axios.put(`http://192.168.1.12:3000/books/${bookId}`, {
//         name: newBookName,
//         author: newAuthor
//       });
//       console.log("Livro editado:", response.data);
//     } catch (error) {
//       console.error("Erro ao editar livro:", error);
//     }
//   }

//   return (
//     <View style={styles.container}>
//       <View style={styles.iconContainer}>
//         <AntDesign name="book" size={50} color="#8B4513" />
//       </View>
//       <TextInput
//         style={styles.textInput}
//         placeholder="ID do Livro a ser Editado"
//         value={bookId}
//         onChangeText={setBookId}
//       />
//       <TextInput
//         style={styles.textInput}
//         placeholder="Novo Nome do Livro"
//         value={newBookName}
//         onChangeText={setNewBookName}
//       />
//       <TextInput
//         style={styles.textInput}
//         placeholder="Novo Autor"
//         value={newAuthor}
//         onChangeText={setNewAuthor}
//       />
//       <TouchableOpacity style={styles.button} onPress={editBook}>
//         <Text style={styles.buttonText}>Editar Livro</Text>
//       </TouchableOpacity>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#F5F5F5',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   iconContainer: {
//     marginBottom: 20,
//   },
//   textInput: {
//     width: '80%',
//     height: 40,
//     marginVertical: 10,
//     paddingHorizontal: 10,
//     borderWidth: 2,
//     borderColor: '#8B4513',
//     borderRadius: 8,
//     backgroundColor: '#FFF',
//   },
//   button: {
//     width: '80%',
//     height: 40,
//     marginTop: 20,
//     backgroundColor: '#8B4513',
//     borderRadius: 8,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   buttonText: {
//     color: '#FFF',
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
// });

import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet, Alert } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import axios from 'axios';

export default function UpdateBook({ navigation }) {
    const [bookName, setBookName] = useState('');
    const [bookData, setBookData] = useState(null);

    async function fetchBookByName() {
        if (bookName.trim() === '') {
            Alert.alert('Erro', 'Por favor, insira um nome de livro válido.');
            return;
        }
        try {
            const response = await axios.get(`http://192.168.1.12:3000/book`);
            if (response.data.length > 0) {
                const book = response.data[0]; // Considera que a pesquisa retorna pelo menos um livro
                setBookData({
                    bookId: book._id,
                    newBookName: book.name,
                    newAuthor: book.author
                });
            } else {
                Alert.alert('Não encontrado', 'Nenhum livro encontrado com esse nome.');
                setBookData(null);
            }
        } catch (error) {
            console.error(error);
            Alert.alert('Erro', 'Não foi possível buscar os livros');
        }
    }

    async function editBook() {
        if (bookData && bookData.bookId) {
            try {
                await axios.put(`http://192.168.1.12:3000/book/${bookData.bookId}`, {
                    name: bookData.newBookName,
                    author: bookData.newAuthor
                });
                Alert.alert('Sucesso', 'Livro atualizado com sucesso');
            }catch (error) {
                console.error(error);
                Alert.alert('Erro', 'Erro ao atualizar o livro');
            }
        }
    }

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.textInput}
                placeholder="Digite o nome do livro para editar"
                value={bookName}
                onChangeText={setBookName}
            />
            <TouchableOpacity style={styles.button} onPress={fetchBookByName}>
                <Text style={styles.buttonText}>Buscar Livro</Text>
            </TouchableOpacity>
            {bookData && (
                <View style={styles.editContainer}>
                    <View style={styles.iconContainer}>
                        <AntDesign name="book" size={50} color="#8B4513" />
                    </View>
                    <TextInput
                        style={styles.textInput}
                        placeholder="Novo Nome do Livro"
                        value={bookData.newBookName}
                        onChangeText={text => setBookData({ ...bookData, newBookName: text })}
                    />
                    <TextInput
                        style={styles.textInput}
                        placeholder="Novo Autor"
                        value={bookData.newAuthor}
                        onChangeText={text => setBookData({ ...bookData, newAuthor: text })}
                    />
                    <TouchableOpacity style={styles.button} onPress={editBook}>
                        <Text style={styles.buttonText}>Editar Livro</Text>
                    </TouchableOpacity>
                </View>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
        backgroundColor: '#F5F5F5',
    },
    editContainer: {
        marginTop: 20,
        width: '100%',
        alignItems: 'center',
    },
    iconContainer: {
        marginBottom: 20,
    },
    textInput: {
        width: '100%',
        height: 40,
        marginVertical: 10,
        paddingHorizontal: 10,
        borderWidth: 2,
        borderColor: '#8B4513',
        borderRadius: 8,
        backgroundColor: '#FFF',
    },
    button: {
        width: '100%',
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