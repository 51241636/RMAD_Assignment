import React from 'react';
import {SafeAreaView, StyleSheet, Text, StatusBar} from 'react-native';

const Assignment = () => {
  React.useEffect(() => {
    functionOne();
  }, []);

  const functionOne = () => {
    const name = 'Apple';
    // If CONDITIONS
    if (name === 'BlueBerry') {
      console.log('Fruit 1', name);
    } else if (name === 'Orange') {
      console.log('Fruit 2', name);
    } else {
      console.log('Fruit 3', 'Not Available');
    }
    //ternary operator


    //Ternary Operator
    // name === 'Orange'
    //   ? console.log('Fruit', true)
    //   : console.log('Fruit', false);

    // Switch Case
    // switch (name) {
    //   case 'Apple':
    //     console.log('Fruit', true);
    //     break;

    //   default:
    //     console.log('Fruit', false);
    //     break;
    // }

   const marks =54;
    // if (marks >= 75) {
    //   console.log('your result is A');
    // } else if (marks >= 65) {
    //   console.log('your result is B');
    // } else if (marks >= 55) {
    //   console.log('your result is c');
    // } else if (marks >= 35) {
    //   console.log('your result is S');
    // } else {
    //   console.log('you fail the exam');
    // }
    // marks >=75
    // ?console.log('your result is A')
    // : marks >= 65
    // ? console.log('your result is B')
    // : marks >= 55
    // ? console.log('your result is C')
    // : marks >= 35
    // ? console.log('your result is S')
    // : console.log('your fail the exam');
    switch (true){
        case marks>=75:
           console.log("your result is A") ;
           break;
           case marks>=65:
           console.log("your result is B") ;
           break;
           case marks>=55:
           console.log("your result is C") ;
           break;
           default:
           console.log("your result is S") ;
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>RMAD project</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    justifyContent: 'center',
    alignItems: 'center',
  },

  title: {
    fontSize: 20,
  },
});

export default Assignment;