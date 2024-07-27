import { StyleSheet } from "react-native";
import React from "react";
import { Modal, Portal, Text, Button, PaperProvider } from "react-native-paper";

const FromnuevoUser = (props) => {
	const saludar = props.saludar;
	const user = props.user;

	const [visible, setVisible] = React.useState(false);
	const showModal = () => setVisible(true);
	const hideModal = () => setVisible(false);
	const containerStyle = { backgroundColor: "white", padding: 20 };
	return (
		<>
			<Portal>
				<Modal
					visible={visible}
					onDismiss={hideModal}
					contentContainerStyle={containerStyle}
				>
					<Text>Hola mucho gusto lo que ve aqui es una variable {}</Text>
					<Button style={{ marginTop: 30 }} onPress={() => saludar(user)}>
						Saludar
					</Button>
				</Modal>
			</Portal>
			<Button style={{ marginTop: 30 }} onPress={showModal}>
				Editar Cuenta
			</Button>
		</>
	);
};

export default FromnuevoUser;

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});
