import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons'; // Importar o ícone do livro da biblioteca expo-icons
import axios from 'axios';

export default function Login({navigation:{navigate}}) {
  
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')


  async function enterData() {
    const data = {
      email:email,
      password:password
    }
    await axios.post('http://192.168.1.12:3000/users/login', data)
    .then((res)=>{
      const token = res.data.data.token
      axios.post('http://192.168.1.12:3000/users/token',data,{
        headers:{
          Authorization:`Bearer ${token}`
        }
      })
      .then(()=>{
        navigate('painel')
        alert('Login efetuado com Sucesso!')
      }).catch(
        exception => {
          console.log(exception)
          alert('Usuário ou senha inválidos!')
        }
      )
    })
    .catch(
      exception => {
        console.log(exception)
        alert('Erro na autenticação!')
      }
    )
  }   

  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <AntDesign name="book" size={50} color="#8B4513"/>
      </View>
      <TextInput style={styles.textInput} placeholder="Email" value={email} onChangeText = {setEmail}/>
      <TextInput style={styles.textInput} placeholder="Password" secureTextEntry={true} value={password} onChangeText = {setPassword} />
      <TouchableOpacity style={styles.button} onPress={enterData}>
        <Text style={styles.buttonText}>Login</Text>
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

