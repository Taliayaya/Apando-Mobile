import React, { useState } from 'react';
import { Controller } from 'react-hook-form';
import { View, Text } from 'react-native';
import { styles } from './FieldStyle';
import { TextInput } from 'react-native-paper';

const Field = ({ fieldName, field, error, control }) => {
    const isPasswordInput = field?.secureTextEntry;
    const [visible, setVisible] = useState(false);

    return (
        <View style={styles.inputContainer}>
            <Controller
                control={control}
                render={({ field: { onChange, onBlur, value } }) => (
                    <TextInput
                        onBlur={onBlur}
                        onChangeText={(value) => onChange(value)}
                        value={value}
                        style={styles.input}
                        right={
                            isPasswordInput && (
                                <TextInput.Icon
                                    name={visible ? 'eye-off' : 'eye'}
                                    onPress={() => setVisible(!visible)}
                                />
                            )
                        }
                        {...field}
                        secureTextEntry={visible}
                        mode="outlined"
                    />
                )}
                name={fieldName}
                rules={{ required: true }}
            />
            <Text style={styles.error}>{error}</Text>
        </View>
    );
};

export default Field;
