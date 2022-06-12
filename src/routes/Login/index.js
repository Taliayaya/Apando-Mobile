import * as React from 'react';
import { ScrollView, Text, Alert } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { styles } from './LoginStyle';
import Form from '../../components/Form';
import auth from '@react-native-firebase/auth';

export default ({ navigation }) => {
    const {
        register,
        setValue,
        handleSubmit,
        control,
        reset,
        formState: { errors },
    } = useForm({
        defaultValues: {
            email: '',
            password: '',
        },
    });
    const onSubmit = (data) => {
        if (!data.email.trim() && !data.password.trim()) {
            console.log('Failed');
            return;
        }
        auth()
            .signInWithEmailAndPassword()
            .then((user) => console.log(user))
            .catch((error) => {
                console.log(error.code);
            });
    };

    const fields = {
        email: {
            label: 'Adresse Mail',
            keyboardType: 'email-address',
        },
        password: {
            label: 'Mot de Passe',
            secureTextEntry: true,
        },
    };
    const fieldKeys = ['email', 'password'];
    const validationErrors = {
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

            <Text
                onPress={() => navigation.navigate('SignUp')}
                style={styles.button}
            >
                Nouveau ? S'inscrire
            </Text>
        </ScrollView>
    );
};
