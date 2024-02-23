import { ScrollView } from 'react-native';
import MovieCard1 from '../components/MovieCard1';


export default function LatestRelease(){
    
    const movies = [
        {
          poster: 'https://m.media-amazon.com/images/M/MV5BYzI3ZGEzM2EtNmU3ZC00YTE2LTg4ZDctMjcxNjliOTBlYjkyXkEyXkFqcGdeQXVyMjkxNzQ1NDI@._V1_FMjpg_UX1000_.jpg',
          video:'',
        },
        {
          poster: 'https://d1vzdswwroofzl.cloudfront.net/wp-content/uploads/2023/09/Athidhi-Web-Series-Review-Rating..jpg',
          video:'',
        },
        {
          poster: 'https://m.media-amazon.com/images/M/MV5BMGNhZDczNTUtOWEzZS00ZjEyLTkzODQtOGM1MTZiMGY2ODIyXkEyXkFqcGdeQXVyMjkwOTAyMDU@._V1_.jpg',
          video:'',
        },
        {
          poster: 'https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/C070AC962711EF5FEB7C472F9EBAABB23F24484DAE3A3AEDE6813D92C9698008/scale?width=506&aspectRatio=2.00&format=jpeg',
          video:'',
        },
    ];
    const handleMoviePress = (movie) => {
    };

    return(
        <ScrollView horizontal>
            {movies.map((movie, index) => (
              <MovieCard1
                key={index}
                poster={movie.poster}
                onPress={() => handleMoviePress(movie)} // Handle click event
              />
            ))}
        </ScrollView>
    );
}