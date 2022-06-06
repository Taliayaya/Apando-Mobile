import React from 'react'
import {View, Text, Button} from 'react-native'

function HomeScreen({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
      <Button title="Login" onPress={() => navigation.navigate('Login')}/>
      <Button title="Inscription" onPress={() => navigation.navigate('SignUp')}/>
    </View>
  );
}

export default HomeScreen;
