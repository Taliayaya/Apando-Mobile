import auth from '@react-native-firebase/auth';
import {
    GoogleSignin,
    statusCodes,
} from '@react-native-google-signin/google-signin';

const onGoogleButtonPress = async () => {
    GoogleSignin.configure({
        webClientId:
            '1042949035924-4bqk7g6lerqfn32i04806gjhibn7she2.apps.googleusercontent.com',
    });
    // try {
    // Get the users ID token
    const { idToken, user } = await GoogleSignin.signIn();
    // Create a Google credential with the token
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);

    // Sign-in the user with the credential
    return auth().signInWithCredential(googleCredential);
    // } catch (error) {
    //     if (error.code === statusCodes.SIGN_IN_CANCELLED) {
    //         // user cancelled the login flow
    //     } else if (error.code === statusCodes.IN_PROGRESS) {
    //         // operation (e.g. sign in) is in progress already
    //     } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
    //         // play services not available or outdated
    //     } else {
    //         // some other error happened
    //     }
    // }
};

export { onGoogleButtonPress };
