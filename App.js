import { Button, StyleSheet, TextInput, View } from 'react-native';
import axios from "axios"

export default function App() {
  async function get_data(req,res){
    await axios.get("http://192.168.1.12:3000/users") 
    .then(
      res => {
        console.log(res.data)
      }
    ).catch(err => {
      console.log(err)
  })
  }
  return (
    <View style={styles.container}>
      <TextInput style={styles.textinputconteiner} placeholder= 'Login'></TextInput>
      <TextInput style={styles.textinputconteiner} placeholder= 'email'></TextInput>
      <TextInput style={styles.textinputconteiner} placeholder= 'password'></TextInput>
      <Button title = "Login" onPress={get_data}></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textinputconteiner:{
    width:'80%',
    padding:'20',
    margin:'10',
    alignItems:'center',
    justifyContent: 'center',
    borderWidth:4,
    borderColor:'darkgreen',
    borderRadius:10
  }
});
