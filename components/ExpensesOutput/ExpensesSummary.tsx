import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { DummyDataProps } from '../../const/DummyData';
import { GlobalStyles } from '../../constants/styles';

type ExpensesSummaryProps = {
	periodName: string;
	expenses: Array<DummyDataProps>;
};

const ExpensesSummary = ({ periodName, expenses }: ExpensesSummaryProps) => {
	const expenseSum = expenses.reduce((sum, expense) => {
		return sum + expense.amount;
	}, 0);

	return (
		<View style={styles.container}>
			<Text style={styles.periodText}>{periodName}</Text>
			<Text style={styles.sumText}>${expenseSum.toFixed(2)}</Text>
		</View>
	);
};

export default ExpensesSummary;

const styles = StyleSheet.create({
	container: {
		padding: 20,
		backgroundColor: GlobalStyles.colors.primaryBlue,
		borderRadius: 6,
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	periodText: {
		color: GlobalStyles.colors.black,
		fontSize: 18,
	},
	sumText: {
		fontSize: 20,
		fontWeight: "bold",
		color: GlobalStyles.colors.black
	}
});
