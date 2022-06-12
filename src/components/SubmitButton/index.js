import React, { useRef } from 'react';
import {
    Text,
    StyleSheet,
    Animated,
    TouchableWithoutFeedback,
} from 'react-native';

const SubmitButton = ({ title, onPress }) => {
    const offset = useRef(new Animated.Value(1)).current;
    const scale = useRef(new Animated.Value(1)).current;

    const handlePress = async () => {
        Animated.spring(offset, {
            toValue: 5,
            useNativeDriver: true,
            duration: 150,
        }).start();
        Animated.spring(scale, {
            toValue: 0.96,
            useNativeDriver: true,
        }).start();
        setTimeout(onPress, 500);
    };

    const handlePressOut = () => {
        Animated.spring(offset, {
            toValue: 0,
            useNativeDriver: true,
            duration: 150,
        }).start();
        Animated.spring(scale, {
            toValue: 1,
            useNativeDriver: true,
        }).start();
    };

    const transform = [
        { translateY: offset },
        { scaleY: scale },
        { scaleX: scale },
    ];

    return (
        <TouchableWithoutFeedback
            onPressIn={handlePress}
            onPressOut={handlePressOut}
        >
            <Animated.View style={[styles.container, { transform }]}>
                <Text style={styles.text}>{title}</Text>
            </Animated.View>
        </TouchableWithoutFeedback>
    );
};

const styles = StyleSheet.create({
    container: {
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        backgroundColor: '#3F5EFB',
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        width: 250,
        elevation: 4,
        borderRadius: 1,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 80,
    },
    text: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default SubmitButton;
