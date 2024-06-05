import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import uuid from 'react-native-uuid';

const AddWorkshopScreen = ({ navigation, route }) => {
  const { addWorkshop } = route.params;
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');

  const handleAddWorkshop = () => {
    const newWorkshop = { _id: uuid.v4(), name, location };
    addWorkshop(newWorkshop);
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Agregar Taller</Text>
      <TextInput
        style={styles.input}
        placeholder="Nombre"
        value={name}
        onChangeText={setName}
        placeholderTextColor="#666"
      />
      <TextInput
        style={styles.input}
        placeholder="Ubicación"
        value={location}
        onChangeText={setLocation}
        placeholderTextColor="#666"
      />
      <TouchableOpacity style={styles.button} onPress={handleAddWorkshop}>
        <Text style={styles.buttonText}>Agregar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
    backgroundColor: '#ffffff',
  },
  title: {
    fontSize: 28,
    marginBottom: 32,
    textAlign: 'center',
    color: '#333',
  },
  input: {
    height: 50,
    borderColor: '#50b070',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
    borderRadius: 8,
    backgroundColor: '#fff',
    fontSize: 16,
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

export default AddWorkshopScreen;
