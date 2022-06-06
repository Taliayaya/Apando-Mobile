import {StyleSheet} from 'react-native'
import { theme } from '../../assets/style/colors';


const styles = StyleSheet.create({
    label: {
      color: theme.font_color,
      margin: 20,
      marginLeft: 0,
    },
    button: {
      marginTop: 40,
      color: theme.font_color,
      height: 40,
      backgroundColor: 'red',
      borderRadius: 30,
    },
    container: {
      flex: 1,
      justifyContent: 'center',
      padding: 8,
      backgroundColor: '#0e101c',
    },
    input: {
      backgroundColor: theme.font_color,
      height: 40,
      padding: 10,
      borderRadius: 30,
    },
    linearGradient: {
        flex: 1,
        paddingLeft: 15,
        paddingRight: 15,
        borderRadius: 5
      },
  });

export {styles}