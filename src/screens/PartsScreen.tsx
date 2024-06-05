import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import uuid from 'react-native-uuid';

const PartsScreen = ({ navigation }) => {
  const [parts, setParts] = useState([]);

  useEffect(() => {
    const loadParts = async () => {
      try {
        const partsData = await AsyncStorage.getItem('parts');
        if (partsData !== null) {
          setParts(JSON.parse(partsData));
        }
      } catch (error) {
        console.error(error);
      }
    };

    loadParts();
  }, []);

  const addPart = (part) => {
    const newParts = [...parts, part];
    setParts(newParts);
    AsyncStorage.setItem('parts', JSON.stringify(newParts));
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={parts}
        keyExtractor={item => item._id.toString()}
        renderItem={({ item }) => (
          <View style={styles.partItem}>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.details}>Descripción: {item.description}</Text>
            <Text style={styles.details}>Precio: {item.price}</Text>
          </View>
        )}
      />
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('AddPart', { addPart })}>
        <Text style={styles.buttonText}>Agregar Parte</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    // backgroundColor: '#f5f5f5',
    backgroundColor: '#ffffff',
  },
  partItem: {
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    // backgroundColor: '#5589FA',
    borderRadius: 8,
    marginBottom: 12,
    borderColor: '#50b070',
    borderWidth: 1,
    backgroundColor: '#ffffff',
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    // color: '#fff',
    color: '#000'
  },
  details: {
    fontSize: 16,
    // color: '#fff',
    color: '#444',
  },
  button: {
    backgroundColor: '#50b070',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10,
    shadowRadius: 12,
    shadowColor: '#000000',
    shadowOffset: {width: 4, height: 4},
    shadowOpacity: 1,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
  },
});

export default PartsScreen;
