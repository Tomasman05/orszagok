import React, { useState } from 'react';
import { ScrollView, Pressable, StyleSheet, Text, View } from 'react-native';

export default function App() {
  const host = "http://localhost:3000/";
  const endpoint = "orszagok";
  const url = `${host}${endpoint}`;

  const [countries, setCountries] = useState([]);

  function getCountries() {
    fetch(url)
      .then(response => response.json())
      .then(result => {
        setCountries(result);
      })
      .catch(error => console.error("Error fetching data:", error));
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Országok</Text>

      <Pressable onPress={getCountries} style={styles.button}>
        <Text style={styles.buttonText}>Lekér</Text>
      </Pressable>

      {countries.map((item) => (
        <View key={item.id} style={styles.card}>
          <Text style={styles.cardTitle}>{item.nev}</Text>
          <Text style={styles.cardText}>Terület: {item.terulet}</Text>
          <Text style={styles.cardText}>Népesség: {item.nepesseg}</Text>
          <Text style={styles.cardText}>Főváros: {item.fovaros}</Text>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#ecf0f1',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
    width: '100%',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#3498db',
  },
  button: {
    backgroundColor: '#3498db',
    padding: 10,
    borderRadius: 8,
    marginVertical: 8,
    width: '200px',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  card: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 16,
    marginVertical: 8,
    width: '75%',
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#2c3e50',
  },
  cardText: {
    fontSize: 14,
    marginBottom: 4,
    color: '#555',
  },
});
