import React from 'react';
import {View, TextInput, Text, Alert, Button} from 'react-native';
import {useForm, Controller} from 'react-hook-form';
import {styles} from './LoginStyle'


function Login() {
  const { register, setValue, handleSubmit, control, reset, formState: { errors } } = useForm({
    defaultValues: {
      email: '',
      password: ''
    }
  });
  const onSubmit = data => {
    Alert.alert('Connexion réussie', `Bienvenue ${data.email}`)
  };

  const onChange = arg => {
    return {
      value: arg.nativeEvent.text,
    };
  };

  console.log('errors', errors);

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Adresse mail</Text>
      <Controller
        control={control}
        render={({field: { onChange, onBlur, value }}) => (
          <TextInput
            style={styles.input}
            onBlur={onBlur}
            onChangeText={value => onChange(value)}
            value={value}
          />
        )}
        name="email"
        rules={{ required: true }}
      />
      <Text style={styles.label}>Mot de passe</Text>
      <Controller
        control={control}
        render={({field: { onChange, onBlur, value }}) => (
          <TextInput
            style={styles.input}
            onBlur={onBlur}
            onChangeText={value => onChange(value)}
            value={value}
            secureTextEntry={true}
          />
        )}
        name="password"
  
        rules={{ required: true}}
      />

      <View style={styles.button}>
        <Button
          style={{buttonInner: styles.button}
        }
          title="Rese"
          color
          onPress={() => {
            reset({
              firstName: 'Bill',
              lastName: 'Luo'
            })
          }}
        />
      </View>

      <View >
        <Button
          style={styles.button}
          color
          title="Button"
          onPress={handleSubmit(onSubmit)}
        />
      </View>
    </View>
  );
};

export default Login;
