import { View, Text, FlatList, ListRenderItemInfo } from 'react-native';
import React from 'react';
import { DummyDataProps } from '../../const/DummyData';
import ExpensesItem from './ExpensesItem';

type ExpensesListProps = {
	expenses: Array<DummyDataProps>;
};
const ExpensesList = ({ expenses }: ExpensesListProps) => {
	const renderExpenseItem = (
		itemData: ListRenderItemInfo<DummyDataProps> | null | undefined
	) => {
		return (
			<ExpensesItem
				description={itemData?.item.description}
				amount={itemData?.item.amount}
				date={itemData?.item.date}
			/>
		);
	};
	return (
		<FlatList
			data={expenses}
			renderItem={renderExpenseItem}
			keyExtractor={(item) => item.id}
		/>
	);
};

export default ExpensesList;
