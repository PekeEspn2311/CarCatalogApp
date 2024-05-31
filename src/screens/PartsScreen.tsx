import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';

const parts = [
  { id: '1', name: 'Carburador', description: 'Carburador para motores de 4 cilindros', price: '$100' },
  { id: '2', name: 'Amortiguador', description: 'Amortiguador delantero', price: '$75' },
  { id: '3', name: 'Batería', description: 'Batería de 12V', price: '$120' },
];

const PartsScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={parts}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.partItem}>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.details}>Descripción: {item.description}</Text>
            <Text style={styles.details}>Precio: {item.price}</Text>
          </View>
        )}
      />
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('AddPart')}>
        <Text style={styles.buttonText}>Agregar Parte</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
  partItem: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    backgroundColor: '#fff',
    borderRadius: 4,
    marginBottom: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  details: {
    fontSize: 16,
    color: '#666',
  },
  button: {
    backgroundColor: '#6200EE',
    padding: 10,
    borderRadius: 4,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default PartsScreen;
