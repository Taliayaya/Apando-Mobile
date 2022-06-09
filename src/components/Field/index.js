import React from 'react';
import { Controller } from 'react-hook-form';
import { TextInput, View, Text } from 'react-native';
import { styles } from './FieldStyle';

const Field = ({ fieldName, field, error, control }) => {
    return (
        <View style={styles.inputContainer}>
            <Text>{field.label}</Text>
            <Controller
                control={control}
                render={({ field: { onChange, onBlur, value } }) => (
                    <TextInput
                        onBlur={onBlur}
                        onChangeText={(value) => onChange(value)}
                        value={value}
                        style={styles.input}
                        {...field}
                    />
                )}
                name={fieldName}
                rules={{ required: true }}
            />
            <Text>{error}</Text>
        </View>
    );
};

export default Field;
