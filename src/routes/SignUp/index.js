import * as React from 'react';
import { ScrollView, Text, Alert } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { styles } from '../Login/LoginStyle';
import Form from '../../components/Form';

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
            username: '',
            email: '',
            password: '',
        },
    });
    const onSubmit = (data) => {
        Alert.alert('Logged', 'hello');
    };

    console.log('errors', errors);
    const fields = {
        username: {
            label: "Nom d'Utilisateur",
        },
        email: {
            label: 'Adresse Mail',
            keyboardType: 'email-address',
        },
        password: {
            label: 'Mot de Passe',
            secureTextEntry: true,
        },
    };
    const fieldKeys = ['username', 'email', 'password'];
    const validationErrors = {
        username: 'Ce champs est requis',
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
                onPress={() => navigation.navigate('Login')}
                style={styles.button}
            >
                Déjà inscrit ? Se connecter
            </Text>
        </ScrollView>
    );
};
