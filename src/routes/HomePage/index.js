import { View, Text, Button } from 'react-native';

export default ({ navigation }) => {
    return (
        <View
            style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
        >
            <Text> HomeScreen</Text>
            <Button
                title="Go to Login"
                onPress={() => navigation.navigate('Login')}
            />
            <Button
                title="Go to App"
                onPress={() => navigation.navigate('App')}
            />
        </View>
    );
};
