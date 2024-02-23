import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Card, Text } from 'react-native-paper';

const SearchCard = ({ imageUrl, title }) => {
  return (
    <View style={styles.container}>
      <Card style={styles.card}>
        <Card.Cover style={styles.cover} source={{ uri: imageUrl }} />
      </Card>
      <Text variant="titleSmall" style={styles.text}>
        {title}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    margin:5,
  },
  card: {
    borderWidth: 0,
    borderColor: 'transparent',
    borderRadius: 5,
    marginTop:5,
    width: 100,
    height: 60,
    marginLeft:7,
  },
  cover: {
    height: 60,
    borderRadius:4,
  },
  text: {
    color: 'white', 
    marginLeft:7,
  },
});

export default SearchCard;
