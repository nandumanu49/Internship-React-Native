import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { Card } from 'react-native-paper';

const MovieCard = ({ poster, onPress }) => {
  const imageUrl = `https://image.tmdb.org/t/p/w500${poster}`;
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={1}
    >
      <Card style={styles.card}>
        <Card.Cover 
          style={styles.cover} 
          source={{ uri: imageUrl }} 
        />
      </Card>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 10,
    width: 120,
    height: 190,
    marginLeft: 8,
  },
  cover: {
    height: 190,
    borderRadius:4,
  },
});

export default MovieCard;
