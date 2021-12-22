import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import {
	View,
	TextInput,
	StyleSheet,
	Button,
	Text,
	Modal,
	ToastAndroid,
} from 'react-native';
import { PressableOpacity } from 'react-native-pressable-opacity';

const GoalAdd = ({ addGoal, visible, closeModal }) => {
	const [textInput, setTextInput] = useState('');

	const submitGoal = () => {
		if (textInput.length > 3) {
			addGoal({ goal: textInput, key: textInput + Math.random() });
			setTextInput('');
		} else {
			ToastAndroid.show('Goal must have at least 4 characters', 200);
		}
	};

	return (
		<Modal visible={visible} animationType='slide'>
			<View style={styles.textView}>
				<TextInput
					style={styles.textInput}
					placeholder='Input goal here!'
					value={textInput}
					maxLength={28}
					onChangeText={(text) => setTextInput(text)}
				/>
				<View style={styles.buttonView}>
					<PressableOpacity
						onPress={closeModal}
						activeOpacity={0.5}
						style={styles.closeBtn}
					>
						<View style={styles.addBtnView}>
							<Text style={styles.btnText}>Close</Text>
						</View>
					</PressableOpacity>
					<PressableOpacity
						onPress={submitGoal}
						activeOpacity={0.5}
						style={styles.addBtn}
					>
						<View style={styles.addBtnView}>
							<Text style={styles.btnText}>Add</Text>
						</View>
					</PressableOpacity>
				</View>
			</View>
		</Modal>
	);
};

export default GoalAdd;

const styles = StyleSheet.create({
	textView: {
		flex: 1,
		width: '100%',
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#004c4c',
		paddingHorizontal: 30,
	},
	textInput: {
		height: 50,
		width: '90%',
		borderRadius: 10,
		padding: 10,
		backgroundColor: '#b2d8d8',
		color: '#004c4c',
		fontSize: 20,
		textAlign: 'center',
	},

	addBtnView: {
		height: 50,
		justifyContent: 'center',
		alignItems: 'center',
	},
	btnText: {
		textAlign: 'center',
	},
	buttonView: {
		width: '90%',
		flexDirection: 'row',
		justifyContent: 'space-evenly',
	},
	addBtn: {
		marginTop: 10,
		backgroundColor: '#66b2b2',
		borderRadius: 10,
		width: 70,
	},
	closeBtn: {
		backgroundColor: '#ce3e3e',
		marginTop: 10,
		borderRadius: 10,
		width: 70,
	},
});
