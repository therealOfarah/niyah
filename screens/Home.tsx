import React from 'react';
import { StyleSheet, Text, View,Image } from 'react-native';
import { useAuthentication } from '../utils/hooks/useAuthentication';
import { Button } from 'react-native-elements';
import { getAuth, signOut } from 'firebase/auth';

const auth = getAuth();

export default function HomeScreen() {
  const { user } = useAuthentication();

  return (
    <View style={styles.container}>
      <Text>السلام عليكم ورحمة الله وبركاته</Text>
        <Image style={styles.image}source={require('../assets/Ramadan.png')}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(143, 172, 139)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    marginTop: 10
  },
  image:{
    maxHeight:"50%",
    maxWidth:"50%"
  }
});
