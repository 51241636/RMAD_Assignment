import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Text, StyleSheet, SafeAreaView, TouchableOpacity, Button } from 'react-native';
import Lesson2 from './Lesson2';

const Text1 = () => {
  const navigation=useNavigation();
  
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}> this is text 1</Text>
      <TouchableOpacity 
    onPress={() => navigation.push('Lesson2')}>
      <Text style={styles.bus}> Go to Lesson2</Text>
      
  

      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container:{
flex:1,
justifyContent:"center",
alignItems:"center",
backgroundColor:"yellow"
  },
  title:{
    fontSize:20,
    color:"red"
  },
  bus:{
    backgroundColor:"blue",
    fontSize:18,
   
  }
});

export default Text1;