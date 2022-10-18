import { View, Text, Pressable, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

type IconButtonProps = {
	icon: keyof typeof Ionicons.glyphMap;
	size: number;
	color: string;
	onPress: () => void;
};

const IconButton = ({ icon, size, color, onPress }: IconButtonProps) => {
	return (
		<Pressable
			onPress={onPress}
			style={({ pressed }) => pressed && styles.pressedBtn}
		>
			<View style={styles.buttonContainer}>
				<Ionicons name={icon} size={size} color={color} />
			</View>
		</Pressable>
	);
};

export default IconButton;

const styles = StyleSheet.create({
	buttonContainer: {
		borderRadius: 24,
		padding: 6,
		marginHorizontal: 8,
		marginVertical: 2
	},
	pressedBtn: {
		opacity: 0.5,
	},
});
