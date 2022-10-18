import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import ExpensesOutput from '../components/ExpensesOutput/ExpensesOutput';

const AllExpenseScreen = () => {
	return <ExpensesOutput expensesPeriod='Total' />;
};

const styles = StyleSheet.create({});

export default AllExpenseScreen;
