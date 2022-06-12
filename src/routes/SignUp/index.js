import * as React from 'react';
import { View, Text, Alert } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { styles } from '../Login/LoginStyle';
import Form from '../../components/Form';
import { onGoogleButtonPress } from '../../utils/googleApi';
import { GoogleSigninButton } from '@react-native-google-signin/google-signin';

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

    const onSubmitGoogle = () => {
        onGoogleButtonPress().then((User) => {
            console.log(User);
        });
    };
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
        <View style={styles.container}>
            <View>
                <Form
                    control={control}
                    buttonText="Valider"
                    submit={handleSubmit(onSubmit)}
                    fields={fields}
                    fieldKeys={fieldKeys}
                    validationErrors={validationErrors}
                />
                <GoogleSigninButton
                    style={{ alignSelf: 'center' }}
                    size={GoogleSigninButton.Size.Wide}
                    color={GoogleSigninButton.Color.Dark}
                    onPress={onSubmitGoogle}
                />
            </View>

            <View style={styles.button}>
                <Text>
                    Déjà inscrit ?{' '}
                    <Text
                        onPress={() => navigation.navigate('Login')}
                        style={styles.button}
                    >
                        Se connecter
                    </Text>
                </Text>
            </View>
        </View>
    );
};
