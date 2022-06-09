import * as React from 'react';
import { ScrollView, Button, Alert } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { styles } from './LoginStyle';
import Form from '../../components/Form';

export default () => {
    const {
        register,
        setValue,
        handleSubmit,
        control,
        reset,
        formState: { errors },
    } = useForm({
        defaultValues: {
            firstName: '',
            lastName: '',
        },
    });
    const onSubmit = (data) => {
        console.log(data);
    };

    console.log('errors', errors);
    const fields = {
        firstName: {
            label: 'First Name',
        },
        email: {
            label: 'Email',
            keyboardType: 'email-address',
        },
        password: {
            label: 'Password',
            secureTextEntry: true,
        },
    };
    const fieldKeys = ['firstName', 'email', 'password'];
    const validationErrors = {
        firstName: 'Ce champs est requis',
        email: 'Ce champs est requis',
        password: 'Ce champs est requis',
    };

    return (
        <ScrollView contentcontainerStyle={styles.container}>
            <Form
                control={control}
                buttonText="Valider"
                submit={handleSubmit(onSubmit)}
                fields={fields}
                fieldKeys={fieldKeys}
                validationErrors={validationErrors}
            />
        </ScrollView>
    );
};
