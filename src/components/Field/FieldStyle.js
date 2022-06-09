import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    input: {
        width: 300,
        height: 40,
        borderRadius: 20,
        paddingHorizontal: 5,
        marginBottom: 5,
    },
    inputContainer: {
        marginBottom: 20,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        elevation: 4,
    },
});

export { styles };
