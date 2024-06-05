import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import uuid from 'react-native-uuid';

const AddCarScreen = ({ navigation, route }) => {
  const { addCar } = route.params;
  const [brand, setBrand] = useState('');
  const [model, setModel] = useState('');
  const [year, setYear] = useState('');
  const [mileage, setMileage] = useState('');
  const [price, setPrice] = useState('');

  const handleAddCar = () => {
    const newCar = { _id: uuid.v4(), brand, model, year: parseInt(year), mileage: parseInt(mileage), price };
    addCar(newCar);
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Agregar Carro</Text>
      <TextInput
        style={styles.input}
        placeholder="Marca"
        value={brand}
        onChangeText={setBrand}
        placeholderTextColor="#666"
      />
      <TextInput
        style={styles.input}
        placeholder="Modelo"
        value={model}
        onChangeText={setModel}
        placeholderTextColor="#666"
      />
      <TextInput
        style={styles.input}
        placeholder="Año"
        value={year}
        onChangeText={setYear}
        keyboardType="numeric"
        placeholderTextColor="#666"
      />
      <TextInput
        style={styles.input}
        placeholder="Kilometraje"
        value={mileage}
        onChangeText={setMileage}
        keyboardType="numeric"
        placeholderTextColor="#666"
      />
      <TextInput
        style={styles.input}
        placeholder="Precio"
        value={price}
        onChangeText={setPrice}
        placeholderTextColor="#666"
      />
      <TouchableOpacity style={styles.button} onPress={handleAddCar}>
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

export default AddCarScreen;
