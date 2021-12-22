import { FlatList, StyleSheet } from 'react-native';
import Goal from './Goal';

const GoalList = ({ goalList, deleteGoal }) => {
	return (
		<FlatList
			contentContainerStyle={styles.goalList}
			data={goalList}
			renderItem={(item) => {
				return (
					<Goal
						goal={item.item.goal}
						goalKey={item.item.key}
						deleteGoal={deleteGoal}
						key={item.item.key}
					/>
				);
			}}
		/>
	);
};

export default GoalList;

const styles = StyleSheet.create({
	goalList: {
		justifyContent: 'flex-start',
		width: '80%',
		padding: 10,
		height: 'auto',
	},
});
