import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';
import Field from '../Field';

const Form = ({
    fieldKeys,
    control,
    fields,
    validationErrors,
    buttonText,
    submit,
}) => {
    const { errorMessage, setErrorMessage } = useState('');
    return (
        <View>
            <Text>{errorMessage}</Text>
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
            <Button title={buttonText} onPress={submit} />
        </View>
    );
};

export default Form;
