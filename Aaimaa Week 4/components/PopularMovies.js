import {ScrollView } from 'react-native';
import MovieCard1 from '../components/MovieCard1';

export default function PopularMovies(){
    const popularmovies = [
        {
          poster: 'https://img.jagrantv.com/webstories/ws3614/1680864624-11.jpg',
        },
        {
          poster: 'https://www.themoviedb.org/t/p/w500/sDTX1bBddpBQdMBId715brGYIua.jpg',
        },
        {
          poster: 'https://img1.hotstarext.com/image/upload/f_auto,t_vl/sources/r1/cms/prod/5466/1115466-v-6c7716c884a1',
        },
        {
          poster: 'https://m.media-amazon.com/images/M/MV5BYjA5ZjEzNTEtMGFjYi00ZGM4LWIzYTEtMzlkNmE5NzhmNWIyXkEyXkFqcGdeQXVyMTIyNzY0NTMx._V1_.jpg',
        },
    ];
    const handlePopularMoviePress = (movie) => {
    };
    return(
        <ScrollView horizontal>
            {popularmovies.map((movie, index) => (
              <MovieCard1
                key={index}
                poster={movie.poster}
                onPress={() => handlePopularMoviePress(movie)} 
              />
            ))}
        </ScrollView>
    );
}