import { View, Text, TouchableOpacity } from 'react-native'
import styles from './styles'
import Title from '../../components/Title'
import { StatusBar } from 'expo-status-bar';
import { useNavigation } from '@react-navigation/native';

export default function Profile() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
        <Title  title={"Profile 🧑🏻"}/>
        <StatusBar style="auto" />
        <TouchableOpacity onPress={() => navigation.navigate('Home')} style={styles.btn}>
            <Text>Go to Home</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Category')} style={styles.btn} >
            <Text>Go to Category</Text>
        </TouchableOpacity>
    </View>
  )
}