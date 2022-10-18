import { Pressable, View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { GlobalStyles } from '../../constants/styles';
import moment from 'moment';
import { useNavigation } from '@react-navigation/native';

type ExpensesItemProps = {
	description?: string | undefined;
	amount?: number | undefined;
	date?: string;
};

const ExpensesItem = ({ description, amount, date }: ExpensesItemProps) => {
	const navigation = useNavigation();
	function exepensePressHandler() {
		navigation.navigate('ManageExpenses' );
	}
	return (
		<Pressable
			onPress={exepensePressHandler}
			style={({ pressed }) => pressed && styles.pressedBtn}
		>
			<View style={styles.expenseItem}>
				<View>
					<Text style={[styles.descriptionText, styles.textBase]}>
						{description}
					</Text>
					<Text style={styles.textBase}>
						{moment(date).format('YYYY-MM-DD')}
					</Text>
				</View>
				<View style={styles.amountContainer}>
					<Text style={styles.amount}>${amount?.toFixed(2)}</Text>
				</View>
			</View>
		</Pressable>
	);
};

export default ExpensesItem;

const styles = StyleSheet.create({
	pressedBtn: {
		opacity: 0.75,
	},
	expenseItem: {
		padding: 12,
		marginVertical: 8,
		backgroundColor: GlobalStyles.colors.primarywhite,
		flexDirection: 'row',
		justifyContent: 'space-between',
		borderRadius: 5,
		elevation: 3,
		shadowColor: GlobalStyles.colors.gray,
		shadowRadius: 4,
		shadowOffset: { width: 1, height: 1 },
		shadowOpacity: 0.4,
	},
	textBase: {
		color: GlobalStyles.colors.gray,
	},
	descriptionText: {
		fontSize: 16,
		marginBottom: 4,
		fontWeight: 'bold',
	},
	amountContainer: {
		paddingHorizontal: 12,
		paddingVertical: 4,
		backgroundColor: GlobalStyles.colors.primaryBlue,
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 4,
		minWidth: 80,
	},
	amount: {
		color: GlobalStyles.colors.black,
		fontWeight: 'bold',
	},
});
