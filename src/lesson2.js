import React, { useState } from "react";
import { FlatList, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const DATA = [
  {
    id: "a",
    title: "Pasindu",
  },
  {
    id: "b",
    title: "kamal",
  },
  {
    id: "c",
    title: "Amara",
  },
  {
    id: "d",
    title: "Udaya",
   
  },
];




const Item = ({ item, onPress, backgroundColor, textColor }) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>
    <Text style={[styles.title, textColor]}>{item.title}</Text>
    <Text style={[styles.id, textColor]}>{item.id}</Text>
    <View style ={{padding: 10}}/>
  </TouchableOpacity>
);

const Lesson2 = () => {
  const [selectedId, setSelectedId] = useState(null);
  // const onPressfruititem

  const renderItem = ({ item }) => {
    const backgroundColor = item.id === selectedId ? "red" : "yellow";
    const color = item.id === selectedId ? 'white' : 'black';

    return (
      <Item
        item={item}
        onPress={() => setSelectedId(item.id)}
        backgroundColor={{ backgroundColor }}
        textColor={{ color }}
      />
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        extraData={selectedId}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    flexDirection:"column-reverse",
  },
  title: {
    fontSize: 32,
  },
});

export default Lesson2;