import React from 'react';
import { StyleSheet, ScrollView, View } from 'react-native';
import Message from '../../../components/Message';
import MessageInput from '../../../components/MessageInput';

export default () => {
    return (
        <View style={styles.container}>
            <ScrollView>
                <Message
                    timestamp={"aujourd'hui"}
                    message={'Salut'}
                    username={'Ilan'}
                />
                <Message
                    timestamp={"aujourd'hui"}
                    message={'Attention, $$ \\frac{1}{2} $$ Salut'}
                    username={'Ilan'}
                />
                <Message
                    timestamp={"aujourd'hui"}
                    message={'# Salut'}
                    username={'Ilan'}
                />
                <Message
                    timestamp={"aujourd'hui"}
                    message={'**Salut**'}
                    username={'Ilan'}
                    repeat={true}
                />
                <Message
                    timestamp={"aujourd'hui"}
                    message={'Salut'}
                    username={'Ilan'}
                />
                <Message
                    timestamp={"aujourd'hui"}
                    message={'Salut'}
                    username={'Ilan'}
                />
                <Message
                    timestamp={"aujourd'hui"}
                    message={'Salut'}
                    username={'Ilan'}
                />
                <Message
                    timestamp={"aujourd'hui"}
                    message={'Salut'}
                    username={'Ilan'}
                />
                <Message
                    timestamp={"aujourd'hui"}
                    message={'Salut'}
                    username={'Ilan'}
                />
                <Message
                    timestamp={"aujourd'hui"}
                    message={'Salut'}
                    username={'Ilan'}
                />
                <Message
                    timestamp={"aujourd'hui"}
                    message={'Salut'}
                    username={'Ilan'}
                />
                <Message
                    timestamp={"aujourd'hui"}
                    message={'Salut'}
                    username={'Ilan'}
                />
                <Message
                    timestamp={"aujourd'hui"}
                    message={'Salut'}
                    username={'Ilan'}
                />
            </ScrollView>
            <MessageInput />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        flex: 1,
    },
});
