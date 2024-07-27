import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert } from 'react-native';
import React from 'react';

const LoginP = () => {
  return (
    <View style={styles.contenedor}>
      <Text style={styles.titulo}>Hola, mucho gusto</Text>
      <Text style={styles.titulo2}>Inicia sesión</Text>
      <View style={styles.contenedorInput}>
        <TextInput
          style={styles.input}
          placeholder="Usuario"
          keyboardType="default"
        />
        <TextInput
          secureTextEntry
          style={styles.input}
          placeholder="Contraseña"
          keyboardType="default"
        />
        <View style={styles.botonContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => Alert.alert("Cargando...")}
          >
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default LoginP;

const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0', // Color de fondo más claro
    padding: 20,
  },
  titulo: {
    textAlign: 'center',
    fontSize: 40, // Tamaño de fuente más pequeño
    color: '#333', // Color de texto más oscuro
    fontWeight: 'bold',
    marginBottom: 10,
  },
  titulo2: {
    fontSize: 24, // Tamaño de fuente más grande
    textAlign: 'center',
    color: '#666', // Color de texto más claro
    marginBottom: 20,
  },
  contenedorInput: {
    width: '100%',
    paddingHorizontal: 20,
  },
  input: {
    marginTop: 15,
    backgroundColor: 'white',
    padding: 15, // Espaciado interior más grande
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ddd', // Borde de color gris claro
  },
  botonContainer: {
    alignItems: 'center',
    marginTop: 25,
  },
  button: {
    width: '80%', // Ancho del botón más proporcional
    padding: 15, // Espaciado interior más grande
    backgroundColor: "#6200ee", // Color de fondo del botón más oscuro
    borderRadius: 10, // Bordes menos redondeados
    alignItems: 'center',
  },
  buttonText: {
    color: 'white', // Corregido el color del texto del botón
    fontSize: 18,
    fontWeight: 'bold',
  },
});
