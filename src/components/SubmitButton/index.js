import React, { useState } from 'react';
import { Pressable, Text, StyleSheet, Animated } from 'react-native';

const SubmitButton = ({ title, onPress }) => {
    const [offset] = useState(new Animated.Value(1));
    const [scale] = useState(new Animated.Value(1));

    const handlePress = async () => {
        Animated.spring(offset, {
            toValue: 5,
            useNativeDriver: true,
        }).start();
        Animated.spring(scale, {
            toValue: 0.96,
            useNativeDriver: true,
        }).start();
        await onPress();
        Animated.spring(offset, {
            toValue: 0,
            useNativeDriver: true,
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
        <Pressable onPressIn={handlePress}>
            <Animated.View style={{ transform, ...styles.container }}>
                <Text style={styles.text}>{title}</Text>
            </Animated.View>
        </Pressable>
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
        borderRadius: 8,
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
