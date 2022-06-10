import React, { useState } from 'react';
import { View, Text, Button, Animated } from 'react-native';
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
    const { errorMessage, setErrorMessage } = useState('');
    const [opacity] = useState(new Animated.Value(1));

    const fadeOut = () => {
        Animated.timing(opacity, { toValue: 0.2, duration: 200 }).start();
    };
    const fadeIn = () => {
        Animated.timing(opacity, { toValue: 1, duration: 200 }).start();
    };

    const handleSubmit = async () => {
        setErrorMessage('');
        fadeOut();
        try {
            submit().then;
            fadeIn();
        } catch (e) {
            setErrorMessage(e.message);
            fadeIn();
        }
    };
    return (
        <View style={styles.container}>
            <Text style={styles.error}>{errorMessage}</Text>
            <Animated.View style={{ opacity }}>
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
        </View>
    );
};

export default Form;
