import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { createStackNavigator } from "@react-navigation/stack";
import ScreenLuces from "./screen/Luces/ScreenLuces";
import ScreenSetting from "./screen/Setting/ScreenSetting";
import ScreenUser from "./screen/User/ScreenUser";
import ScreenPuerta from "./screen/Puertas/ScreenPuerta";
import UserDetalles from "./screen/User/UserDetalles";
import Logginp2 from "./screen/Login/Logginp2";
import Editaruser from "./screen/User/Editaruser";
import Nuevouser from "./screen/User/Nuevouser";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: '#6200ee' }, // Color de fondo del encabezado
        headerTintColor: '#ffffff', // Color del texto del encabezado
        headerTitleStyle: { fontWeight: 'bold' }, // Estilo del título del encabezado
      }}
    >
      <Stack.Screen name="Usuarios" component={ScreenUser} />
      <Stack.Screen name="Detalles" component={UserDetalles} />
      <Stack.Screen name="nuevouser" component={Nuevouser} />
      <Stack.Screen name="EditarUser" component={Editaruser} />
    </Stack.Navigator>
  );
}

function Mytabs() {
  return (
    <Tab.Navigator
      initialRouteName="menu"
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: '#6200ee', // Color del icono activo
        tabBarInactiveTintColor: '#888', // Color del icono inactivo
        tabBarStyle: {
          backgroundColor: '#ffffff', // Color de fondo de la barra de pestañas
        },
        tabBarLabelStyle: {
          fontSize: 12, // Tamaño de la etiqueta de la pestaña
        },
        tabBarIcon: ({ color, size }) => {
          let iconName;
          switch (route.name) {
            case 'menu':
              iconName = 'home';
              break;
            case 'luces':
              iconName = 'lightbulb';
              break;
            case 'puertas':
              iconName = 'door';
              break;
            case 'user':
              iconName = 'account-supervisor-circle';
              break;
            case 'Ajustes':
              iconName = 'cog';
              break;
            default:
              iconName = 'circle';
          }
          return <MaterialCommunityIcons name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen
        name="menu"
        component={Logginp2}
        options={{
          tabBarBadge: "2",
        }}
      />
      <Tab.Screen name="luces" component={ScreenLuces} />
      <Tab.Screen name="puertas" component={ScreenPuerta} />
      <Tab.Screen
        name="user"
        component={MyStack}
        options={{ headerShown: false }}
      />
      <Tab.Screen name="Ajustes" component={ScreenSetting} />
    </Tab.Navigator>
  );
}

export default function Navegation() {
  return <Mytabs />;
}
