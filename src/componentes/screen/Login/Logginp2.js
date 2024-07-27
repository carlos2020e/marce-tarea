import { StyleSheet, View, Alert } from "react-native";
import {
	Text,
	TextInput,
	Button,
	PaperProvider,
} from "react-native-paper";
import React from "react";
import FromnuevoUser from "./FromnuevoUser";
import {
	getAuth,
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
} from "firebase/auth";
import FirebaseConfig from "../../../FirebaseConfig";
import { useNavigation } from "@react-navigation/native";

const Logginp2 = () => {
	const navigation = useNavigation();
	const auth = getAuth(FirebaseConfig.app);

	const [user, onChangeUser] = React.useState("");
	const [Password, onChangePass] = React.useState("");
	const [verpassword, SetVerPassword] = React.useState(true);

	const crearcuenta = () => {
		createUserWithEmailAndPassword(auth, user, Password)
			.then((UserCredential) => {
				console.log("Cuenta creada");
				Alert.alert("Cuenta creada");
				const user = UserCredential.user;
				console.log(user);
			})
			.catch((error) => {
				console.log(error);
			});
	};

	const loggin = () => {
		signInWithEmailAndPassword(auth, user, Password)
			.then((UserCredential) => {
				console.log("Cuenta creada");
				const user = UserCredential.user;
				Alert.alert("Bienvenido:", user.email);
				navigation.replace("Dash");
				console.log(user);
			})
			.catch((error) => {
				console.log(error);
			});
	};

	const Saludaruser = (nombre) => {
		Alert.alert("Hola saludos");
	};

	const IngreserUsuario = () => {
		if (user === "") {
			Alert.alert("El campo de usuario no debe de estar vacío");
		}
		if (Password === "") {
			Alert.alert("El campo password no debe de estar vacío");
		}
	};

	const funverpassword = () => {
		SetVerPassword(!verpassword);
	};

	return (
		<PaperProvider>
			<View style={styles.contenedorPrincipal}>
				<Text style={styles.titulo} variant="displayLarge">
					Hola
				</Text>
				<Text style={styles.subtitulo} variant="headlineLarge">
					Iniciar sesión
				</Text>

				<View style={styles.contenedorInput}>
					<TextInput
						label="Correo"
						onChangeText={onChangeUser}
						keyboardType="email-address"
						value={user}
						style={styles.input}
					/>
					<TextInput
						style={[styles.input, { marginTop: 10 }]}
						label="Password"
						onChangeText={onChangePass}
						secureTextEntry={verpassword}
						value={Password}
						right={<TextInput.Icon icon="eye" onPress={funverpassword} />}
					/>
					<Button
						theme={{ colors: { primary: "#6200ee" } }}
						style={styles.button}
						icon="login"
						mode="contained"
						onPress={loggin}
					>
						Ingresar
					</Button>
					<Button
						theme={{ colors: { primary: "#6200ee" } }}
						style={styles.button}
						icon="account-plus"
						mode="contained"
						onPress={crearcuenta}
					>
						Crear cuenta
					</Button>

					<FromnuevoUser user={user} saludar={Saludaruser} />
				</View>
			</View>
		</PaperProvider>
	);
};

export default Logginp2;

const styles = StyleSheet.create({
	contenedorPrincipal: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "#f5f5f5", // Color de fondo más claro
		padding: 20,
	},
	titulo: {
		textAlign: "center",
		fontSize: 32, // Tamaño de fuente más pequeño
		color: "#333", // Color de texto más oscuro
		fontWeight: "bold",
		marginBottom: 10,
	},
	subtitulo: {
		fontSize: 24, // Tamaño de fuente más grande
		textAlign: "center",
		color: "#666", // Color de texto más claro
		marginBottom: 20,
	},
	contenedorInput: {
		width: "100%",
		paddingHorizontal: 20,
	},
	input: {
		backgroundColor: "white",
		padding: 10,
		borderRadius: 10,
		borderWidth: 1,
		borderColor: "#ddd", // Borde de color gris claro
	},
	button: {
		marginTop: 20,
		padding: 10,
		borderRadius: 10, // Bordes menos redondeados
	},
});
