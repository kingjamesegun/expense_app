import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ManageExpenses from './screens/ManageExpenses';
import RecentExpenseScreen from './screens/RecentExpenseScreen';
import AllExpenseScreen from './screens/AllExpenseScreen';
import { GlobalStyles } from './constants/styles';
import { Ionicons } from '@expo/vector-icons';
import IconButton from './components/UI/IconButton';

const Stack = createNativeStackNavigator();
const BottomTabs = createBottomTabNavigator();

function ExpensesOverview() {
	return (
		<BottomTabs.Navigator
			screenOptions={({navigation})=> ({
				headerStyle: { backgroundColor: 'white' },
				headerTintColor: `${GlobalStyles.colors.black}`,
				tabBarStyle: { backgroundColor: GlobalStyles.colors.black },
				tabBarActiveTintColor: GlobalStyles.colors.primaryBlue,
				tabBarInactiveTintColor: GlobalStyles.colors.gray,
				headerRight: ({ tintColor }) => {
					return (
						<IconButton
							icon='add'
							size={24}
							color={tintColor as string}
							onPress={() => {
								navigation.navigate("ManageExpenses")
							}}
						/>
					);
				},
			})}
		>
			<BottomTabs.Screen
				name='RecentExpenses'
				component={RecentExpenseScreen}
				options={{
					title: 'Recent Expenses',
					tabBarLabel: 'Recent',
					tabBarIcon: ({ color, size }) => (
						<Ionicons name='hourglass' size={size} color={color} />
					),
				}}
			/>
			<BottomTabs.Screen
				name='AllExpenses'
				component={AllExpenseScreen}
				options={{
					title: 'All Expenses',
					tabBarLabel: 'All Expenses',
					tabBarIcon: ({ color, size }) => (
						<Ionicons name='calendar' size={size} color={color} />
					),
				}}
			/>
		</BottomTabs.Navigator>
	);
}

export default function App() {
	return (
		<>
			<StatusBar style='auto' />
			{/* in this pattern, the bottom is not in the manage expenses screen...
      all and recent expenses has been grouped into the bottom screen */}
			<NavigationContainer>
				<Stack.Navigator initialRouteName='ExpensesOverview'>
					<Stack.Screen name='ManageExpenses' component={ManageExpenses} />
					<Stack.Screen
						name='ExpensesOverview'
						component={ExpensesOverview}
						options={{ headerShown: false }}
					/>
				</Stack.Navigator>
			</NavigationContainer>
		</>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
});
