import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { StatusBar } from 'expo-status-bar';
import React from 'react';
import HomePage from './src/routes/HomePage';
import Login from './src/routes/Login';
import SignUp from './src/routes/SignUp';
import MainApp from './src/routes/App';
import { ChatProvider } from './src/utils/context/ChatContext';

const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <ChatProvider>
                <Stack.Navigator>
                    <Stack.Screen
                        name="Home"
                        component={HomePage}
                        options={{ title: 'Overview' }}
                    />
                    <Stack.Screen
                        name="Login"
                        component={Login}
                        options={{ title: 'Connexion' }}
                    />
                    <Stack.Screen
                        name="SignUp"
                        component={SignUp}
                        options={{ title: 'Inscription' }}
                    />
                    <Stack.Screen name="App" component={MainApp} />
                </Stack.Navigator>
            </ChatProvider>
        </NavigationContainer>
    );
}
