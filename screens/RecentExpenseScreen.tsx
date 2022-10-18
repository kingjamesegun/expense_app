import { View, Text } from 'react-native';
import React from 'react';
import ExpensesOutput from '../components/ExpensesOutput/ExpensesOutput';

const RecentExpenseScreen = () => {
	return <ExpensesOutput expensesPeriod='Last 7days' />;
};

export default RecentExpenseScreen;
