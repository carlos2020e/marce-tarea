import { StyleSheet, View } from 'react-native';
import React from 'react';
import { DataTable, IconButton } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

const TablaUsuario2 = (props) => {
  const datos = props.datosuser;
  const obteneruser = props.obtenerdatos;
  const navegacion = useNavigation(); // Usar useNavigation para navegación
  
  const alertaEliminar = (id, nombre) => {
    Alert.alert(
      'Eliminar Usuario',
      `¿Estás seguro de que deseas eliminar al usuario ${nombre}?`,
      [
        { text: 'Cancelar', style: 'cancel' },
        {
          text: 'Eliminar',
          onPress: async () => {
            // Aquí iría el código para eliminar el usuario
            console.log(`Eliminar usuario con ID: ${id}`);
            obteneruser(); // Actualiza la lista después de eliminar
          },
        },
      ]
    );
  };

  return (
    <DataTable style={styles.table}>
      <DataTable.Header>
        <DataTable.Title style={styles.headerTitle}>User</DataTable.Title>
        <DataTable.Title style={styles.headerTitle}>Email</DataTable.Title>
        <DataTable.Title style={styles.headerTitle}>Perfil</DataTable.Title>
        <DataTable.Title numeric style={styles.headerTitle}>Acción</DataTable.Title>
      </DataTable.Header>

      {datos.map((item) => (
        <DataTable.Row key={item.id}>
          <DataTable.Cell>{item.nombre}</DataTable.Cell>
          <DataTable.Cell>{item.email}</DataTable.Cell>
          <DataTable.Cell>{item.perfil}</DataTable.Cell>
          <DataTable.Cell>
            <View style={styles.iconContainer}>
              <IconButton
                style={styles.iconButton}
                size={20}
                icon="square-edit-outline"
                color={styles.icon.color} // Cambiar el color del icono
                onPress={() =>
                  navegacion.navigate("editaruser", {
                    datouser: item,
                    obtenerdatos: obteneruser,
                  })
                }
              />
              <IconButton
                style={styles.iconButton}
                size={20}
                icon="trash-can-outline"
                color={styles.icon.color} // Cambiar el color del icono
                onPress={() => alertaEliminar(item.id, item.nombre)}
              />
              <IconButton
                style={styles.iconButton}
                size={20}
                icon="eye"
                color={styles.icon.color} 
                onPress={() => console.log("Pressed")}
              />
            </View>
          </DataTable.Cell>
        </DataTable.Row>
      ))}
    </DataTable>
  );
};

const styles = StyleSheet.create({
  table: {
    backgroundColor: '#FFFFFF', 
  },
  headerTitle: {
    color: '#6200ee', 
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  iconButton: {
    padding: 0,
  },
  icon: {
    color: '#6200ee', 
  },
});

export default TablaUsuario2;
