import React, { useState, useRef } from 'react';
import { SafeAreaView, Text, Button, Animated } from 'react-native';
import Field from '../Field';
import SubmitButton from '../SubmitButton';
import { styles } from './FormStyle';

const Form = ({
    fieldKeys,
    control,
    fields,
    validationErrors,
    buttonText,
    submit,
}) => {
    const [errorMessage, setErrorMessage] = useState('');
    const fadeAnim = useRef(new Animated.Value(1)).current;

    const fadeIn = () => {
        // Will change fadeAnim value to 1 in 5 seconds
        Animated.timing(fadeAnim, {
            toValue: 1,
            duration: 500,
            useNativeDriver: false,
        }).start();
    };

    const fadeOut = () => {
        // Will change fadeAnim value to 0 in 3 seconds
        Animated.timing(fadeAnim, {
            toValue: 0.2,
            duration: 500,
            useNativeDriver: false,
        }).start();
    };

    const handleSubmit = async () => {
        setErrorMessage('');
        fadeOut();
        try {
            submit();
        } catch (e) {
            setErrorMessage(e);
        } finally {
            setTimeout(fadeIn, 500);
        }
    };
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.error}>{errorMessage}</Text>
            <Animated.View style={[{ opacity: fadeAnim }]}>
                {fieldKeys.map((key) => {
                    return (
                        <Field
                            key={key}
                            fieldName={key}
                            field={fields[key]}
                            error={validationErrors[key]}
                            control={control}
                        />
                    );
                })}
            </Animated.View>
            <SubmitButton title={buttonText} onPress={handleSubmit} />
        </SafeAreaView>
    );
};

export default Form;
