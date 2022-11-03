import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Text, StyleSheet, SafeAreaView, TouchableOpacity, Button, TextInput } from 'react-native';
import Lesson2 from './Lesson2';

const Text1 = ({navigation}) => {
 
    const [name, setName] = React.useState("");
    const [mail, setMail] = React.useState(null);
    
  
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}> Login details</Text>
      <TextInput
        style={styles.input}
        placeholder="enter your name?"
        onChangeText={val => setName(val)}
        value={name}
      />
      <TextInput
        style={styles.input}
        onChangeText={setMail}
        value={mail}
        placeholder="enter your email address?"
        keyboardType="text"
      />
      <TouchableOpacity 
    onPress={() => navigation.push('Lesson2', {
      name:"Pasindu",

    })}>
      <Text style={styles.bus}> Submit</Text>
      
  

      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container:{
flex:1,
justifyContent:"center",
alignItems:"center",
backgroundColor:"black"
  },
  title:{
    fontSize:20,
    color:"red"
  },
  bus:{
    backgroundColor:"blue",
    fontSize:18,
   
  },
  input:{
    alignSelf:"center",
width:300,
height:50,
color:"yellow",
margin: 12,
    borderWidth: 1,
    padding: 10,
  }
});

export default Text1;