import React from 'react';
import { View } from 'react-native';
import Message from '../../../components/Message';

export default () => {
    return (
        <View>
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
                repeat={true}
            />
            <Message
                timestamp={"aujourd'hui"}
                message={'Salut'}
                username={'Ilan'}
            />
        </View>
    );
};
