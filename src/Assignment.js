import React from 'react';
import {SafeAreaView, StyleSheet, Text, StatusBar} from 'react-native';

// const Assignment = () => {
//   React.useEffect(() => {
//     functionOne();
//   }, []);

  const functionOne = () => {
    const marks =75;
    if(marks >=75){
        console.log("your result is A");
    }elseif(marks= 65 - 75);{
        console.log("your result is B")
    }elseif(marks= 55 - 65 );{
        console.log("your result is C");
    }else{
        console.log("you fail the Exam");
    }

    

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

    // const marks = 75;
    // 75 -> A
    // 65 - 75 -> B
    // 55 - 65 -> C
    // 35 - 55 -> s
    // 35 - W
  };

//   return (
//     <SafeAreaView style={styles.container}>
//       <Text style={styles.title}>Lesson 01</Text>
//     </SafeAreaView>
//   );
// };

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