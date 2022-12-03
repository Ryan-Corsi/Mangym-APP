import {View, Text, Button} from 'react-native'

export default function Home({navigation}) {
    return (
      <View>
        <Text>Home Screen</Text>
        <Button
          title='Login'
          onPress={()=>navigation.navigate('Login')}
        />
        <Button
          title='Register'
          onPress={()=>navigation.navigate('Register')}
        />
        <Button
          title='Create'
          onPress={()=>navigation.navigate('Create')}
        />
      </View>
    );
  }