import React from 'react';
import { View, StyleSheet, TextInput, Alert } from 'react-native';
import { IconButton } from 'react-native-paper';
import { useChat } from '../../utils/hooks/chatHook';

export default () => {
    const { message, setMessage } = useChat();

    const handleSending = () => {
        try {
            Alert.alert('Message sent', message);
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <View style={styles.container}>
            <TextInput
                multiline
                maxLength={1000}
                placeholder={'Type your message here'}
                style={styles.input}
                onChangeText={setMessage}
                value={message}
            />
            <IconButton
                icon={'send'}
                style={
                    message.trim().length > 0
                        ? styles.send
                        : { display: 'none' }
                }
                color={'#000'}
                size={32}
                onPress={handleSending}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'stretch',
    },
    input: {
        flex: 1,
        backgroundColor: '#ccc',
        borderColor: '#000',
        minHeight: 50,
        borderRadius: 30,
        paddingLeft: 20,
        margin: 5,
    },
    send: {
        backgroundColor: '#ccc',
        alignSelf: 'center',
        marginRight: 5,
    },
});
