import { Alert, StyleSheet, Text, View, ScrollView } from "react-native";
import React from "react";
import { TextInput, Button } from "react-native-paper";
import FirebaseConfig from "../../../FirebaseConfig";
import { collection, addDoc } from "firebase/firestore";

const Nuevouser = ({ route }) => {
  const conexionbd = FirebaseConfig.bd;
  const obtenerdatos = route.params.funcionobtenerdatos;
  const [nombre, setNombre] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [user, setUser] = React.useState("");
  const [perfil, setPerfil] = React.useState("");
  const [password, setPassword] = React.useState("123456");

  const AgregarUser = async () => {
    try {
      const docRef = await addDoc(collection(conexionbd, "users"), {
        nombre: nombre,
        email: email,
        perfil: perfil,
        password: password,
      });

      console.log("Document written with ID: ", docRef.id);
      limparinput();
      obtenerdatos();
    } catch (e) {
      console.error("Error adding document: ", e);
    }

    Alert.alert("Dato guardado");
    obtenerdatos();
  };

  const limparinput = () => {
    setNombre("");
    setEmail("");
    setUser("");
    setPerfil("");
    setPassword("");
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <TextInput
        style={styles.input}
        label="Nombre"
        value={nombre}
        onChangeText={setNombre}
        theme={{ colors: { primary: '#6200ee' } }} 
      />

      <TextInput
        style={styles.input}
        label="Email"
        value={email}
        onChangeText={setEmail}
        theme={{ colors: { primary: '#6200ee' } }} 
      />

      <TextInput
        style={styles.input}
        label="User"
        value={user}
        onChangeText={setUser}
        theme={{ colors: { primary: '#6200ee' } }} 
      />

      <TextInput
        style={styles.input}
        label="Perfil"
        value={perfil}
        onChangeText={setPerfil}
        theme={{ colors: { primary: '#6200ee' } }} 
      />

      <View style={styles.buttonContainer}>
        <Button
          icon="check"
          mode="contained"
          onPress={AgregarUser}
          style={styles.button}
          labelStyle={styles.buttonLabel}
        >
          Registrar
        </Button>
        <Button
          icon="close"
          mode="contained"
          onPress={() => console.log("Pressed")}
          style={styles.button}
          labelStyle={styles.buttonLabel}
        >
          Cancelar
        </Button>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#f5f5f5', // Color de fondo
  },
  input: {
    height: 50,
    marginBottom: 15,
    backgroundColor: '#ffffff', // Color de fondo del input
  },
  buttonContainer: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    flex: 1,
    marginHorizontal: 5,
    backgroundColor: '#6200ee', // Color de fondo del botón
  },
  buttonLabel: {
    color: '#ffffff', // Color del texto del botón
  },
});

export default Nuevouser;
