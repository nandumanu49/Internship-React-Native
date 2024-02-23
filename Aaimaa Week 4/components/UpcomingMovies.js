import React, { useEffect, useState } from 'react';
import { ScrollView,Modal, View, StyleSheet } from 'react-native'; 
import { Card,Text,Button} from 'react-native-paper';
import UpcomingApi from './UpcomingApi';
import MovieCard from './MovieCard';


const UpcomingMovies = () => {
  const [topMovies, setTopMovies] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState({});

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const movies = await UpcomingApi();
        setTopMovies(movies);
      } catch (error) {
        // Handle error
      }
    };

    fetchMovies();
  }, []);

  const openModal = (movie) => {
    setSelectedMovie(movie);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <>
      <ScrollView horizontal>
        {topMovies.map((movie) => (
          <MovieCard
            key={movie.id}
            poster={movie.poster_path} 
            onPress={() => openModal(movie)}
          />
        ))}
      </ScrollView>
      <Modal
        animationType="slide"
        transparent={true} 
        visible={modalVisible}
        onRequestClose={closeModal}
      >
        <View style={styles.modalContainer}>
          <Card style={{width:350}}>
            <Card.Cover source={{ uri: `https://image.tmdb.org/t/p/w500${selectedMovie.backdrop_path}` }} />
          </Card>
          <Text variant="titleLarge" style={styles.modalTitle}> {selectedMovie.title}</Text>
          <Button style={{width:280}} mode="outlined" textColor="white">Subscribe to Watch</Button>
          <Text variant="bodyLarge" style={styles.modalDescription}> {selectedMovie.overview}</Text>
          <Text variant="labelLarge" style={styles.others}>Date : {selectedMovie.release_date}</Text>
          <Text variant="labelLarge" style={styles.others}>Rating : {selectedMovie.vote_average}</Text>
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'black', 
  },
  modalTitle: {
    color: 'yellow', 
    fontWeight: 'bold',
    fontSize: 25,
    marginBottom: 9,
    marginTop:8,
  },
  modalDescription: {
    color: 'white', 
    fontSize: 19,
    marginBottom: 10,
    marginTop:10,
  },
  others: {
    color: 'white', 
    fontSize: 19,
    marginBottom: 20,
  },
});

export default UpcomingMovies;
