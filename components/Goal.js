import { View, Text, StyleSheet } from 'react-native';
import { PressableOpacity } from 'react-native-pressable-opacity';

const Goal = ({ goal, goalKey, deleteGoal }) => {
	const deleteGoalFn = () => {
		deleteGoal(goalKey);
	};

	return (
		<PressableOpacity
			onLongPress={deleteGoalFn}
			activeOpacity={0.5}
			isInList='true'
		>
			<View style={styles.goalView}>
				<Text style={styles.goal}>{goal}</Text>
			</View>
		</PressableOpacity>
	);
};

export default Goal;

const styles = StyleSheet.create({
	goalView: {
		borderWidth: 1.5,
		borderColor: '#b2d8d8',
		borderRadius: 10,
		width: 350,
		padding: 5,
		backgroundColor: '#006666',
		marginVertical: 2,
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	goal: {
		textAlign: 'left',
		color: '#b2d8d8',
		fontSize: 25,
	},
});
