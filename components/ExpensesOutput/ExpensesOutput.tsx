import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import ExpensesList from './ExpensesList';
import ExpensesSummary from './ExpensesSummary';
import { DummyDataProps } from '../../const/DummyData';
import { GlobalStyles } from '../../constants/styles';

const DUMMY_EXPENSES = [
	{
		id: 'e1',
		description: 'A plate of rice with amala',
		amount: 59.99,
		date: new Date('2022-12-11'),
	},
	{
		id: 'e2',
		description: 'have 5 downlines',
		amount: 150000,
		date: new Date('2022-12-15'),
	},
	{
		id: 'e3',
		description: 'Shoe made',
		amount: 150000,
		date: new Date('2022-12-15'),
	},
	{
		id: 'e4',
		description: 'Bought a land',
		amount: 1000000,
		date: new Date('2022-12-16'),
	},
	{
		id: 'e5',
		description: 'Carried Im😍le out',
		amount: 34000,
		date: new Date('2022-12-17'),
	},
	{
		id: 'e6',
		description: 'Shoe made',
		amount: 150000,
		date: new Date('2022-12-15'),
	},
	{
		id: 'e7',
		description: 'Bought a land',
		amount: 1000000,
		date: new Date('2022-12-16'),
	},
	{
		id: 'e8',
		description: 'Carried Im😍le out',
		amount: 34000,
		date: new Date('2022-12-17'),
	},
	{
		id: 'e9',
		description: 'Shoe made',
		amount: 150000,
		date: new Date('2022-12-15'),
	},
	{
		id: 'e10',
		description: 'Bought a land',
		amount: 1000000,
		date: new Date('2022-12-16'),
	},
	{
		id: 'e11',
		description: 'Carried Im😍le out',
		amount: 34000,
		date: new Date('2022-12-17'),
	},
];

type ExpensesProps = {
	expensesPeriod: string;
	// dummy_expenses: Array<DummyDataProps>
};

const ExpensesOutput = ({ expensesPeriod }: ExpensesProps) => {
	return (
		<View style={styles.container}>
			<ExpensesSummary
				expenses={DUMMY_EXPENSES as unknown as Array<DummyDataProps>}
				periodName={expensesPeriod}
			/>
			<ExpensesList
				expenses={DUMMY_EXPENSES as unknown as Array<DummyDataProps>}
			/>
		</View>
	);
};

export default ExpensesOutput;

const styles = StyleSheet.create({
	container: {
		backgroundColor: GlobalStyles.colors.primarywhite,
		flex: 1,
		padding: 10,

	},
});
