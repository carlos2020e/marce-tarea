import { StyleSheet, View } from 'react-native';
import React from 'react';
import { Button, Card } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import TablaUsuario2 from './TablaUsuario2';
import FirebaseConfig from '../../../FirebaseConfig';
import { collection, getDocs } from 'firebase/firestore';

const ScreenUser = () => {
  const Navegacion = useNavigation();
  const bd = FirebaseConfig.bd;

  const [datos, setDatos] = React.useState([
    {
      id: 0,
      nombre: "",
      email: "",
      perfil: "",
    },
  ]);

  const obtenerdatos = async () => {
    const user = [];
    const querySnapshot = await getDocs(collection(bd, "users"));
    querySnapshot.forEach((doc) => {
      const { email, nombre, perfil, usuario } = doc.data();
      user.push({
        id: doc.id,
        email,
        nombre,
        perfil,
        usuario,
      });
    });

    setDatos(user);
  };

  React.useEffect(() => {
    obtenerdatos();
  }, []);

  return (
    <View style={styles.container}>
      <Button
        theme={{ colors: { primary: '#6200ee' } }} 
        style={styles.button}
        icon="account-plus"
        mode="contained"
        onPress={() =>
          Navegacion.navigate("nuevouser", {
            hola: "Hola carlos",
            funcionobtenerdatos: obtenerdatos,
          })
        }
      >
        Nuevo Usuario
      </Button>

      <Card style={styles.card}>
        <TablaUsuario2 datosuser={datos} obtenerdatos={obtenerdatos} />
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5', 
  },
  button: {
    marginTop: 15,
    width: '100%',
    paddingVertical: 8,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#6200ee', 
  },
  card: {
    marginTop: 20,
    padding: 15,
    backgroundColor: '#ffffff', 
    elevation: 4,
  },
});

export default ScreenUser;
