import React from 'react';
import { Button } from 'react-native';
// import LinearGradient from 'react-native-linear-gradient';

function GradientButton({name, onPress, style}) {
    return (
        // <LinearGradient colors={['#4c669f', '#3b5998', '#192f6a']} style={style.linearGradient}>
            <Button onPress={onPress} title={name} color style={style.buttonInner} />
        // </LinearGradient>
    )
}

export default GradientButton;