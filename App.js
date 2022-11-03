// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Lesson2 from './src/Lesson2';
import Assignment from './src/Assignment';
import { Navigations } from './src/enum';
import Text1 from './src/Text1';

function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      
    </View>
  );
}

const Stack = createNativeStackNavigator();


function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={Navigations.Text1}>
        <Stack.Screen name={Navigations.Text1} 
        component={Text1} 
       options={{headerShown: false}}
        />
        
        <Stack.Screen name={Navigations.Lesson2} 
        component={Lesson2} 
      //  options={{headerShown: false}}
        />
       
        
      
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;