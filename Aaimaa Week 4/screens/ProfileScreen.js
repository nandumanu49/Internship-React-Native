
import React from 'react';
import { View, StyleSheet,Image } from 'react-native';
import {Text,Appbar,Avatar,Divider} from 'react-native-paper';

const ProfileScreen = () => {
  return (
    <>
      <Appbar.Header
        style={styles.header}
      >
        <Image
          source={require('../assets/White-Logo.png')} 
          style={styles.icon}
        />
        <Appbar.Content />
        <Text style={{color:'white', alignContent:'end'}}>Help & Settings</Text>
      </Appbar.Header>
      <View style={styles.container}>
        <Text variant="titleMedium" style={styles.text}>Subscribe to enjoy</Text>
        <Text variant="titleMedium" style={styles.text}>Disney+ Hotstar</Text>
        <Text></Text>
        <Divider/>
        <Text></Text>
        <Text variant="titleLarge" style={{color:'white',marginLeft:5}}>Profiles</Text>
        <Avatar.Image style={{marginLeft:5}} size={64} source={require('../assets/nodownload.jpeg')} />
        <Text style={{color:'white',marginLeft:11}} variant="titleMedium">manu</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',

  },
  text: {
    marginLeft:5,
    color: 'white', 
  },
  icon: {
    width: 70,
    height: 60,
  },
  header: {
    backgroundColor: 'black',
    marginBottom:6,
  },
});

export default ProfileScreen;
