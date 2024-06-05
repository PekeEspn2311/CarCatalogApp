import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import uuid from 'react-native-uuid';

const WorkshopsScreen = ({ navigation }) => {
  const [workshops, setWorkshops] = useState([]);

  useEffect(() => {
    const loadWorkshops = async () => {
      try {
        const workshopsData = await AsyncStorage.getItem('workshops');
        if (workshopsData !== null) {
          setWorkshops(JSON.parse(workshopsData));
        }
      } catch (error) {
        console.error(error);
      }
    };

    loadWorkshops();
  }, []);

  const addWorkshop = (workshop) => {
    const newWorkshops = [...workshops, workshop];
    setWorkshops(newWorkshops);
    AsyncStorage.setItem('workshops', JSON.stringify(newWorkshops));
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={workshops}
        keyExtractor={item => item._id.toString()}
        renderItem={({ item }) => (
          <View style={styles.workshopItem}>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.details}>Ubicación: {item.location}</Text>
          </View>
        )}
      />
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('AddWorkshop', { addWorkshop })}>
        <Text style={styles.buttonText}>Agregar Taller</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#ffffff',
  },
  workshopItem: {
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
    color: '#000',
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

export default WorkshopsScreen;
