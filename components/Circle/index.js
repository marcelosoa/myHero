import { TouchableOpacity, StyleSheet, Text } from 'react-native';

export default function CircleComponent({text}) {
    return (
        <TouchableOpacity style={styles.circle}>
            <Text>
                {text}
            </Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    circle: {
    width: 70,
    height: 70,
    backgroundColor: '#caecd8',
    borderRadius: 50,
    color: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    },
});
