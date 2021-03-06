import * as React from 'react';
import { Text, View } from 'react-native';
import { useForm } from 'react-hook-form';
import { styles } from './LoginStyle';
import Form from '../../components/Form';
import auth from '@react-native-firebase/auth';
import { onGoogleButtonPress } from '../../utils/googleApi';
import { GoogleSigninButton } from '@react-native-google-signin/google-signin';

export default ({ navigation }) => {
    const {
        handleSubmit,
        control,
        formState: { errors },
    } = useForm({
        defaultValues: {
            email: '',
            password: '',
        },
    });

    const [user, setUser] = React.useState();
    const [initializing, setInitializing] = React.useState(true);

    const onSubmit = (data) => {
        if (!data.email.trim() && !data.password.trim()) {
            console.log('Failed');
            return;
        }
        auth()
            .signInWithEmailAndPassword(data.email, data.password)
            .then((user) => console.log(user))
            .catch((error) => {
                console.log(error.code);
            });
    };

    const onSubmitGoogle = () => {
        onGoogleButtonPress().then((User) => {
            console.log(User);
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

    const onAuthStateChanged = (user) => {
        console.log(user);
        setUser(user);
        if (initializing) setInitializing(false);
    };

    React.useEffect(() => {
        const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
        return subscriber;
    }, []);

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
                    Nouveau ?{' '}
                    <Text
                        onPress={() => navigation.navigate('SignUp')}
                        style={styles.button}
                    >
                        S'inscrire
                    </Text>
                </Text>
            </View>
        </View>
    );
};
