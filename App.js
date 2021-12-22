import { useState } from 'react';
import { StatusBar as ExpoBar } from 'expo-status-bar';
import { StyleSheet, View, StatusBar, ToastAndroid, Text } from 'react-native';
import GoalAdd from './components/GoalAdd';
import GoalList from './components/GoalList';
import { PressableOpacity } from 'react-native-pressable-opacity';

export default function App() {
	const [goalList, setGoalList] = useState([]);
	const [modalVisible, setModalVisible] = useState(false);

	const addGoalFn = (goal) => {
		if (goalList.length < 15) {
			setGoalList((state) => {
				return [...state, goal];
			});
			setModalVisible(false);
		} else {
			ToastAndroid.show(
				'Maximum of 15 tasks reached! Delete tasks by long-pressing them.',
				500
			);
		}
	};

	const closeModal = () => {
		setModalVisible(false);
	};

	const deleteGoal = (goalKey) => {
		setGoalList((state) => {
			return state.filter((item) => item.key !== goalKey);
		});
		ToastAndroid.show('Task deleted!', 200);
	};

	return (
		<View style={styles.container}>
			<ExpoBar />
			<PressableOpacity
				style={styles.addGoalBtn}
				onPress={() => setModalVisible(true)}
			>
				<Text>Add goal</Text>
			</PressableOpacity>
			<GoalAdd
				addGoal={addGoalFn}
				visible={modalVisible}
				closeModal={closeModal}
			/>
			<GoalList goalList={goalList} deleteGoal={deleteGoal} />
			<StatusBar style='auto' />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		paddingTop: StatusBar.currentHeight + 20,
		flex: 1,
		backgroundColor: '#004c4c',
		alignItems: 'center',
		justifyContent: 'center',
	},
	addGoalBtn: {
		backgroundColor: '#66b2b2',
		borderRadius: 10,
		padding: 10,
		width: '85%',
		height: 50,
		alignItems: 'center',
		justifyContent: 'center',
	},
});
