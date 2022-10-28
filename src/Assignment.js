import React from 'react';
import { Text, StyleSheet } from 'react-native';

const Assignment = () => {
  return (
    <Text style={styles.baseText}>
     Welcome to Assignment
      
    </Text>
  );
};

const styles = StyleSheet.create({
  baseText: {
    flex:1,
    fontWeight: 'bold',
    color:'red',
    fontSize:20,
    textAlign:'center',
    justifyContent:'center',
    alignItems:'center',
    backgroundcolor:'white'

  },
  
});

export default Assignment;